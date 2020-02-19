const mongoose = require('mongoose');
const cstring = 'mongodb+srv://semir17:asdfghjklS1!@cluster0-qdlav.mongodb.net/prodavnica?retryWrites=true&w=majority';

const initDB = () =>{
    mongoose.connect(cstring, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err){
            console.log('Could not conn from database');
            return;
        }
    });
}

module.exports= {
    initDB,
    
};