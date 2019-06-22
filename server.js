const express = require('express')
const path = require('path');
const app = express()
//const port = process.env.PORT;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/home.html'));
})

app.get('/styles/home.css', function (req, res) {
  res.sendFile(path.join(__dirname + '/styles/home.css'));
})

app.get('/img/smart-logo.png', function (req, res) {
  res.sendFile(path.join(__dirname + '/img/smart-logo.png'));
})

app.listen(8000);
