const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const db = require('./bootstrap/db');
const auth = require('./handlers/auth');


db.initDB();

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', auth.viewWorkers);
app.post('/', auth.apiWorkers);



app.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Started on port 8080');
});