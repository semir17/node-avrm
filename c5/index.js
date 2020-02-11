const db = require('./bootstrap/db');
 const produkt = require ('./models/produkt');

 
db.initDB();

produkt.createNew({
    "ime" : "Milka so Oreo",
    "proizvoditel" : "Mondelez",
    "cena" : 50.0,
    "tezina" : 300.0,
    "parcinja" : 1
})

.then(() => {
    return produkt.update ("5e42b11a7398be20882cf01f", {ime: "Smokice"});
})

.then (() => {
    return produkt.remove("5e42b2a47398be20882d4cf8");
})

.then (() => {
    return produkt.readAll()
})

.then(data => {
    console.log(data);
})

.catch(err => {
    console.log(err);
})

/*const mongoose = require('mongoose');
const cstring = 'mongodb+srv://semir17:asdfghjklS1!@cluster0-qdlav.mongodb.net/prodavnica?retryWrites=true&w=majority';

const Produkt = mongoose.model(
    'produkti',
    {
        ime: String,
        proizvoditel: String,
        cena: Number,
        tezina: Number,
        parcinja: Number
    },
    'produkti'

    );

mongoose.connect(cstring, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log('Could not conn from database');
        return;
    }
});

//add to database
let p = new Produkt({
    
        "ime" : "Milka so Oreo",
        "proizvoditel" : "Mondelez",
        "cena" : 50.0,
        "tezina" : 300.0,
        "parcinja" : 1
    
});

p.save((err) => {
    if(err){
        console.log('Could not read from database');
        return;
    }
});


//read from database
/*
Produkt.find({}, (err,data) =>{
    if(err){
        console.log('Could not save to database');
        return;
    }
    console.log(data);

});
*/

//delete from database

//Produkt.remove({_id: "5e42b2867398be20882d467a"}, (err) => {
   // if(err){
     //   console.log('Could not delete from database');
        return;
   // }
//});

//update from database

/*Produkt.update({ime: "Smoki"}, {cena: 15.5}, (err) => {
    if(err){
        console.log('Could not update from database');
        return;
    }
});*/


// https://mongoosejs.com/ connect to db
// mongodb atlas - my cloud
