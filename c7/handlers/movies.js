var movie = require('../models/movie')

const getMovies = (req, res) => {
    movie.readAll()
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
        exports.status(500).send('error');
    })
}

/*
const getOneMovie = (req, res) => {
    movie.readOne(req.params.id)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
        exports.status(500).send('error');
    })
}


const insertMovies = (req,res) => {
    movie.createNew(res.body)
    .then(()=> {
        res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
         exports.status(500).send('error');
    })
}

/*
const updateMovies = () => {
    movie.update(req)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('error');
    })
}


const removeMovies = () => {
    movie.remove(req)
    .then()
    .catch(err => {
        console.log(err);
        res.status(500).send('error');
    })
}


*/
module.exports = {
    getMovies,
  // getOneMovie,
  // insertMovies,
   // updateMovies,
   // removeMovies
}