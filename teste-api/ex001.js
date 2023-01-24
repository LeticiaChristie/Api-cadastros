const express = require ('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 

let registration = []

app.get('/registre', (req, res) => {
    res.send(registration)
})

app.post('/registre', (req, res) => {
    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email

    if(!name || !phone || !email){
        res.send('Missing infos.')
    }
    
    registration.push({name: name, phone: phone, email:email})
    res.status(200).send('ok!')
})
app.put('/registre/:id', (req, res) => {
    const id = req.params.id
    const newPhone = req.body.phone
    registration[id].phone = newPhone
    res.send(registration[id])
})
app.delete('/registre/:id', (req, res) => {
    const id = req.params.id
    const delet = registration.splice(id,1)
    res.send('Registre deleted with succesfuly.')
})

console.log('Server running!');
app.listen(3000)