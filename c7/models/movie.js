const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        title: String,
        release_date: Number,
        director: String,
        actors: [String],
        genre: [String]
        
    },
    'movies'
    );

    const readAll = () => {
        return new Promise((success, fail) => {
            Movie.find({}, (err,data) =>{
                if(err){
                    return fail(err);
                }
                return success(data)
            
            });
        });
    };

  /*  const readOne = () => {
        return new Promise ((success, fail) => {
            Movie.findById(id, 'title', (err,data) => {
                if(err){
                    return fail(err)
                }
                return success(data)
            });
        });
    };

    const createNew = (data) => {
        return new Promise ((success, fail) => {
            let p = new Moive(data);
            p.save((err) => {
                if(err){
                    return fail(err);
                }
                return success();
            });
        });
    };

    const remove = (id) => {
        return new Promise ((success, fail) => {
            Movie.deleteOne({_id: id}, (err) =>{
            if(err){
                return fail(err);
            }
            return success();
            });
        });
    };

    const update = (id, data) => {
        return new Promise ((success, fail) => {
            User.updateOne({_id: id}, data, (err) =>{
            if(err){
                return fail(err);
            }
            return success();
            });
        });
    };
*/
    module.exports= {
        readAll,
       // readOne,
       // createNew,
       // remove,
        //update,
    }