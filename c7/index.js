const express = require('express');
const bodyParser = require('body-parser');
const db = require('./bootstrap/db');
const movies = require ('./handlers/movies')

db.initDB();

let api = express();

api.use(bodyParser.json());

api.get('/movies', movies.getMovies );
//api.get('/movies/:id', movies.getOneMovie);
//api.post('/movies',movies.instertMovies );
//api.put('/movies/:id',movies.updateMovies );
//api.delete('/movies/:id', movies.removeMovies);

api.listen(8080, (err) => {
    if(err){
        console.log(error);
        return;
    }
    console.log('listening on port 8080');
    return;
});
