import { Sequelize } from "sequelize";
import config from '../../config/config'

	const sequelize=new Sequelize(
  		config.db_name,
  		config.db_username,
  		config.db_password,
  	{
    		dialect:'postgres',
    		pool:{
      			max:5,
      			min:0,
      			acquire:30000,
      			idle:10000
    		}
  	}
	)

var DataTypes = require("sequelize").DataTypes;
var _comments = require("./comments");
var _follower_map = require("./follower_map");
var _likes = require("./likes");
var _posts = require("./posts");
var _tag_post_map = require("./tag_post_map");
var _tags = require("./tags");
var _users = require("./users");

function initModels(sequelize) {
  var comments = _comments(sequelize, DataTypes);
  var follower_map = _follower_map(sequelize, DataTypes);
  var likes = _likes(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var tag_post_map = _tag_post_map(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  follower_map.belongsTo(follower_map, { as: "follower_follower", foreignKey: "follower_follower_id"});
  follower_map.hasMany(follower_map, { as: "follower_maps", foreignKey: "follower_follower_id"});
  comments.belongsTo(posts, { as: "comment_post", foreignKey: "comment_post_id"});
  posts.hasMany(comments, { as: "comments", foreignKey: "comment_post_id"});
  likes.belongsTo(posts, { as: "like_post", foreignKey: "like_post_id"});
  posts.hasMany(likes, { as: "likes", foreignKey: "like_post_id"});
  tag_post_map.belongsTo(posts, { as: "tp_post", foreignKey: "tp_post_id"});
  posts.hasMany(tag_post_map, { as: "tag_post_maps", foreignKey: "tp_post_id"});
  tag_post_map.belongsTo(tags, { as: "tp_tag", foreignKey: "tp_tag_id"});
  tags.hasMany(tag_post_map, { as: "tag_post_maps", foreignKey: "tp_tag_id"});
  comments.belongsTo(users, { as: "comment_user", foreignKey: "comment_user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "comment_user_id"});
  follower_map.belongsTo(users, { as: "follower_user", foreignKey: "follower_user_id"});
  users.hasMany(follower_map, { as: "follower_maps", foreignKey: "follower_user_id"});
  likes.belongsTo(users, { as: "like_user", foreignKey: "like_user_id"});
  users.hasMany(likes, { as: "likes", foreignKey: "like_user_id"});
  posts.belongsTo(users, { as: "post_user", foreignKey: "post_user_id"});
  users.hasMany(posts, { as: "posts", foreignKey: "post_user_id"});

  return {
    comments,
    follower_map,
    likes,
    posts,
    tag_post_map,
    tags,
    users,
  };
}
const models=initModels(sequelize);
export default models
export {sequelize}
