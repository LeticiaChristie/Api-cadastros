const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const users = []

app.get('/users', function (req, res) {
    res.send(users)
})
app.get('/users/:id', function (req, res) {
    let id = req.params.id;
    return res.json([users[id]])
    
})

app.post('/users', function (req, res) {
    console.log('log body',req.body);
    const name = req.body.name
    const cpf = req.body.cpf
    const phone = req.body.phone 
    const email = req.body.phone
    const cep = req.body.cep

    console.log(name, cpf, phone, email, cep);

    users.push({name:name,cpf: cpf, phone: phone, email:email, cep:cep})

    res.send('ok!')
})

app.patch('/users/update/:id',function (req, res){
    const name = req.body.name;
    users[req.params.id] = name;
    return res.json(users[req.params.id]);
})

app.delete('/users/delete/:id',function (req, res) {
    let id = req.params.id;
    users[id] = null; //deletar item
    return res.json(users[id]);
})

app.listen(3000)