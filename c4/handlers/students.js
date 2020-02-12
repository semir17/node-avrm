const fs = require('fs');
const STUDENTS_LIST ='./students.json';

const getStudents = (req,res) => {
    fs.readFile(STUDENTS_LIST, 'utf8', (err,data) => {
        if(err){
            console.log('ERROR');
            res.status(500).send('could not read file');
            return;
        }
        let out = {
            students: JSON.parse(data)
        };
        res.render('students', out);
    });

};

const postStudents = (req, res) => {
    fs.readFile(STUDENTS_LIST, 'utf8' , (err, data) => {
        if(err){
            console.log('ERROR');
                res.status(500).send('could not append to file');
                return;
            }
            data = JSON.parse('data');
            data.push({
                id: new Date().getTime(),
                first_name: req.body.first_name,
                last_name:req.body.last_name,
                address: req.body.address,
                avg_grade: Number(req.body.avg_grade)
            });
            data = JSON.stringify(data);
        });
            fs.writeFile(STUDENTS_LIST, data, (err) => {
                if(err){
                    console.log('ERROR');
                        res.status(500).send('could not write to file');
                        return;
                        
                    }
                    res.redirect('./students')

            })
        
        
    };

    module.exports = {
        getStudents,
        postStudents,
    };