const express = require('express')
const app = express()
const bodyParser = require ('body-parser') 

app.use(bodyParser.urlencoded({extended: true}))

app.post('/experimental', (req, resp) =>{
    console.log(req.body)
})

app.post('/aluno', (req, resp) =>{
    console.log(req.body)
})

app.listen(3003)