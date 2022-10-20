const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('follower_map', {
    follower_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    follower_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    follower_follower_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'follower_map',
        key: 'follower_id'
      }
    }
  }, {
    sequelize,
    tableName: 'follower_map',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "follower_map_pkey",
        unique: true,
        fields: [
          { name: "follower_id" },
        ]
      },
    ]
  });
};
