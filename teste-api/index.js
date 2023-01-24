const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 

let students =[]

app.get('/students',function (req, res) {
    res.send(students)
    
}) 

app.post('/students',function (req, res) {
    const name = req.body.name
    const age = req.body.age
    const team = req.body.team

    if(!name || !age || !team){
        res.send('Missing infos. name, or age, or class.')
    }
     
    const registreStudents = {name:name, age:age, team:team}
    students.push(registreStudents)
    return res.status(200).send('OK!')

})
app.put('/students/:id',(req, res) => {
    const newName = req.body.name
    const id = req.params.id
    students[id].name = newName // {name: "", age: ""}
    res.send(students[id])
})
app.delete('/students/:id', function (req, res) {
    const id = req.params.id
    students = students.splice(id,1)//deleta n objetos à partir do id falado.Nesse caso, deleta 1 objeto, o objet id
    res.send('Api deleted!')
})
console.log('Server running');
app.listen(3000)