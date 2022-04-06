'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      photo.belongsTo(models.user, {
        foreignKey: "userId",
        // onDelete: "cascade"
      });
      photo.belongsTo(models.restaurant, {
        foreignKey: "restaurantId",
        // onDelete: "cascade"
      });
    }
  }
  photo.init({
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'photo',
  });
  return photo;
};