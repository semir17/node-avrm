const express = require('express')
const hbs = require('hbs');
const bodyParser = require('body-parser');
const students = require('./handlers/students');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'hbs');

//app.get('/', (req, res) =>{
    //res.send('ok');
  //  let data = {
    //    ime:' Pero'
    //};
    //res.render('main', data);
//});

app.get('/students', students.getStudents);
app.post('/students', students.postStudents);

app.listen(8080);

//
