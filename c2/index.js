console.log('test');



const fs = require ('fs');

fs.writeFile('data.txt', 'TEST TEST TEST', (err) => {
    if (err){
        console.log('could not write');
        return;
    }
    console.log('could write file');

    fs.appendFile('data.txt', 'test test test', (err) => {
        if (err){
            console.log('ERROR, could not append to file');
            return;
        }
        console.log('append executed');

        fs.readFile('data.txt', 'utf8', (err, data) => {
            if (err){
                console.log('could not read');
                return;
            }
            console.log(data);
        });
    });
});

const write = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, (err) => {
            if (err){
                return fail(err);
            }
            return success;
    
        });
    });
};

write('file.txt', 'some content')
    .then(() => {
        console.log('successfully wrote to file');
    })
    .catch(err => {
        console.log('an error occured while writing to file')
    });


    const append = (file, content) => {
        return new Promise((success, fail) => {
            fs.appendFile(file, content, (err) => {
                if(err){
                    return fail(err);
                }
                return success;
            });
        });
    }

append('file.txt', 'TESTTTT')
.then(() => {
    console.log('succesfully append to file');
})
.catch(err => {
    console.log('an error occured while appending to file')
});

const read = (file) => {
    return new Promise ((success, fail) => {
        fs.readFile(file, content, (err, data) => {
            if(err){
                return fail(err);
            }
          
            return success(data);
            
        });
    });
}

write('file.txt', 'SOME OTHER CONTENT')
.then(data => {
   // console.log('succesfully read the file');
    return append('file.txt', 'READ ME...');
    
})
.then(() => {
    return read('file.txt');
})
.then(data => {
    
    console.log(data);
})
.catch(err => {
    console.log('an error occured while reading the file')
});

let str1 = "eden";
let str2 = 'dva';

let str3 = `tri`; //template string

let ime = 'Semir';
let pozdrav = `Jas sum 
${ime}`;

console.log(pozdrav);
console.log(pozdrav.length);
 let str4 = 'a b-c d'; // ['a', 'b', 'c', 'd']
 let str4n = str4.split(' ', '-');
 console.log(str4n);



// if is outside it hasnt wait for reading
/*fs.appendFile('data.txt', 'test test test', (err) => {
    if (err){
        console.log('ERROR, could not append to file');
        return;
    }
    console.log('append executed');
});

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err){
        console.log('could not read');
        return;
    }
    console.log(data);
});*/