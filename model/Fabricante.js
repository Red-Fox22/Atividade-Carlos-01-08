const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Fabricante = db.define('fabricante', {
    codFabricante:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    marca:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    tableName: 'fabricantes',
    timestamps: false
})

module.exports = Fabricante