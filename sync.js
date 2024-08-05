const { Fabricante, Produto } = require('./model/associacao.js')
const conn = require('./db/conn')

async function syncDatabase(){
    try{
        await conn.sync({force: true})
        console.log('Tabelas')
    }catch(err){
        console.error('Erro de Sincronização com banco de dados', err)
    }finally{
        conn.close()
        console.log('Database sincronizada com sucesso!')
    }
}

syncDatabase()