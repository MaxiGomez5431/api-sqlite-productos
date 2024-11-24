'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fabricantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fabricantes.belongsToMany(models.Productos, {through: 'Producto_Fabricante'})
    }
  }
  Fabricantes.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    direccion: DataTypes.STRING,
    numeroContacto: DataTypes.STRING,
    pathImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fabricantes',
    tableName: 'Fabricantes',
    timestamps: false
  });
  return Fabricantes;
};