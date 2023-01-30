const express = require('express')
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 

let stok = []

app.get('/stok', (req, res) => {
    res.send(stok)
})

app.post('/stok', (req, res) => {
    const product = req.body.product
    const valueProduct = req.body.valueProduct
    const amount = req.body.amount

    const id = uuidv4()

    if (!product || !valueProduct || !amount){
        res.status.send('Missing infos.')
    }
    
    stok.push({id:id, product:product, valueProduct:valueProduct, amount:amount})
    res.status(200).send('Product adding!')
})
app.put('/stok/:id', (req, res) => {
    const id = req.params.id
    const newProduct = req.body.product
    const registre = stok.find((registre) =>{
        return registre.id === id
    })

    console.log('registre:', registre);
    registre.product = newProduct
    res.send(registre)
    
})
app.delete('/stok/:id', (req, res) => {
    const id = req.params.id
    const delet = stok.splice(id, 1)
    res.send('Registre deleted with success!')
    
})

app.listen(3000,() =>{
    console.log('Server running!');
})