const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    codProduto:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fabricanteId:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        references: {
                    model: 'fabricante',
                    key: 'codFabricante'
                }
    }
},{
    tableName: 'produtos',
    timestamps: false
})

module.exports = Produto