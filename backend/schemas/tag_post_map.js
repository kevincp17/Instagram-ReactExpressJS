const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tag_post_map', {
    tag_post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tp_post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'posts',
        key: 'post_id'
      }
    },
    tp_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tags',
        key: 'tag_id'
      }
    }
  }, {
    sequelize,
    tableName: 'tag_post_map',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tag_post_map_pkey",
        unique: true,
        fields: [
          { name: "tag_post_id" },
        ]
      },
    ]
  });
};
