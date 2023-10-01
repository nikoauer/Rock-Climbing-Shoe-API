const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shoes extends Model {}

Shoes.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Brand: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Model: {
    type: DataTypes.STRING,
    allowNull: true
  },
  USMensSize: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  USWomensSize: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  UkSize: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  EuroSize: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  BoxSize: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  SoleSize: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  ToeBox: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Width: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'Shoes',
  }
);

module.exports = Shoes;
