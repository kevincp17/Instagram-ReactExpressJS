const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    comment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comment_post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'posts',
        key: 'post_id'
      }
    },
    comment_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'comments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "comments_pkey",
        unique: true,
        fields: [
          { name: "comment_id" },
        ]
      },
    ]
  });
};
