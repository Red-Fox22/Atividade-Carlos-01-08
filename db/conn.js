const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('rel_1_n', 'root', 'senai',{
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('Conectado ao banco de dados com sucesso!')
}).catch((err)=>{
    console.error('Erro ao conectar ao banco de dados:', err)
})

module.exports = sequelize