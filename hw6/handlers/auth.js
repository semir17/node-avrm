var workers = require('../models/workers');

const viewWorkers = (req, res) => {
    res.render('workers');
}

const apiWorkers = (req, res) => {
   

    if(req.body.first_name !== undefined && req.body.first_name.length > 0 &&
    req.body.last_name !== undefined && req.body.last_name.length > 0 &&
    req.body.address !== undefined && req.body.address.length > 0 &&
    req.body.age !== undefined && req.body.age.length > 0 &&
    req.body.position !== undefined && req.body.position.length > 0 

    )
    {
        workers.createNew({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            address:req.body.address,
            age:req.body.age,
            position:req.body.position
            

        })
        .then(() => {
            res.status(201).send('created');
        })

        .catch(err => {
            console.log(err);
            res.redirect('/register?err=1')
        });
    }
    else {
        res.status(400).send('bad.request');
    }
}

module.exports = {
    viewWorkers,
    apiWorkers
};