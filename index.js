const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const Fabricante = require('./model/Fabricante')
const Produto = require('./model/Produto')

const PORT = 3000
const hostname = 'localhost'

//----------------- Configurações Express -----------------

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//---------------------------------------------------------


//---------------------- Fabricante ----------------------- 

app.get('/fabricante', (req, res) => {
    const valores = req.query
    console.log(valores)

    try {
        const pesq = await Fabricante.findOne({ where: { marca: valores.marca }, raw: true })
        if (pesq === null) {
            console.log(pesq)
            res.status(200).json(pesq)
        } else if (pesq.marca == valores.marca) {

        }
    } catch (err) {
        console.error('Não foi possível realizar a pesquisa')
        res.status(500).json({ message: 'Não foi possível realizar a pesquisa' })
    }
})

//---------------------------------------------------------

app.post('/fabricante', async (req, res) => {
    const valores = req.body
    console.log("Aplicação Rodando!")

    try {
        const pesq = await Fabricante.create(valores, { raw: true })
        console.log(valores)
        res.status(200).json(pesq)
    } catch (err) {
        console.error('Não foi possível gravar dados')
        res.status(500).json({ message: 'Não foi possível gravar dados' })
    }


    res.status(200).json({ message: 'Valores Recebidos!' })
})



//------------------------ Produto ------------------------

app.post('/produto', async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (valores.gabricanteId == 1) {
        const pesq = await Produto.create(valores, { raw: true })
        res.status(201).json(pesq)
    } else {
        res.status(404).json({ message: 'Fabricante não encontrado' })

    }
})


//---------------------------------------------------------

app.get('/produto', (req, res) => {
    const valores = req.query
    console.log(valores)

    try {
        const pesq = await Produto.findOne({ where: { marca: valores.nome }, raw: true })
        if (pesq === null) {
            console.log(pesq)
            res.status(200).json(pesq)
        } else if (pesq.nome == valores.nome) {

        }
    } catch (err) {
        console.error('Não foi possível realizar a pesquisa')
        res.status(500).json({ message: 'Não foi possível realizar a pesquisa' })
    }
})


//---------------------------------------------------------

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
}).catch((err) => {
    app.listen(PORT, hostname, () => {
        console.error('Banco de Dados não conectado', err)
    })
})

//---------------------------------------------------------