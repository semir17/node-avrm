const db = require('../bootstrap/db');
const users = require('../models/user');

const viewDashboard = (req, res) => {
    
        users.readAll()
            .then((data) => {
                let out = {
                    users: data
                };
                res.render('dashboard', out);
            
    });
}

module.exports = {
    viewDashboard
};