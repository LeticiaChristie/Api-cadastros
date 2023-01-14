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

app.put('/users/:id', function (req, res) {
    const id = req.params.id
    users[id] = req.body;
    res.send(users[id])
})
/* /* app.patch('/users/update/:id',function (req, res){
    const name = req.body.name;
    users[req.params.id].name = name; 
   /*  users = [{a: 1}, {b:2}]
    const userA = users[0]
    users[0].a = "Maria"
    users = [{a: "Maria"}, {b:2}]
    const userB = {
        name: "Thiago",
        age: 34
    }
    userB.name */ 
/*     return res.json(users[req.params.id]);
}) */ 

app.delete('/users/:id',function (req, res) {
    const id = req.params.id;
    users[id] = null; //deletar item
    return res.json(users[id]);
})

const builde = {
    title: "bfsfs"
}
app.listen(3000)