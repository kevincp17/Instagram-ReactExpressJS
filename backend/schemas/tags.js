const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags', {
    tag_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tags',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tags_pkey",
        unique: true,
        fields: [
          { name: "tag_id" },
        ]
      },
    ]
  });
};
