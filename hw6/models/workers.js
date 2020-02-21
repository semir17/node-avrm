const mongoose = require('mongoose');
const Worker = mongoose.model(
    'workers',
    {
        first_name: String,
        last_name: String,
        address: String,
        age: Number,
        position: String
        
    },
    'workers'

    );

    const readAll = () => {
        return new Promise((success, fail) => {
            Worker.find({}, (err,data) =>{
                if(err){
                    return fail(err);
                }
                return success(data)
            
            });
        });
    };

    const createNew = (data) => {
        return new Promise ((success, fail) => {
            let p = new Worker(data);
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
            Worker.deleteOne({_id: id}, (err) =>{
            if(err){
                return fail(err);
            }
            return success();
            });
        });
    };
    //npm install express mongoose hbs --save FOR EXPRESS

    const update = (id, data) => {
        return new Promise ((success, fail) => {
            Worker.updateOne({_id: id}, data, (err) =>{
            if(err){
                return fail(err);
            }
            return success();
            });
        });
    };

    const getByName =() => {
        return new Promise ((succes, fail) => {
            Worker.findOne({first_name: first_name}, (err, data) => {
                if(err){
                    return fail(err);
                }
                return success(data);
            });
        });
    }

    module.exports= {
    readAll,
    createNew,
    remove,
    update,
    getByName
    };