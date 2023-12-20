const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/Index.html', { root: __dirname})
})

app.post('/', (req, res) => {
    console.log(req.body)
    var name = req.body.name;
    res.header('Content-type', 'application/json');
    res.send(`{"name": "${name}"}`)
})

app.listen(port, () => {
    console.log('APP IS UP AND RUNNING!')
})