console.log('test');



const fs = require ('fs');

/*fs.writeFile('data.txt', 'TEST TEST TEST', (err) => {
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
            return success();
    
        });
    });
};




    const append = (file, content) => {
        return new Promise((success, fail) => {
            fs.appendFile(file, content, (err) => {
                if(err){
                    return fail(err);
                }
                return success();
            });
        });
    }



const read = (file) => {
    return new Promise ((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
          
            return success(data);
            
        });
    });
}

write('file.txt', 'some content')
.then(() => {
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
*/



// Broj na zborovi
 fs.readFile('lorem.txt', 'utf8', (err, data) => {
    if (err){
        console.log('could not read');
        return;
    }
    let data2 = data.split(' ');
    console.log(data2.length);
 });
// Broj na karakteri
 fs.readFile('lorem.txt', 'utf8', (err, data) => {
    if (err){
        console.log('could not read');
        return;
    }
    console.log(data.length);
 });

//Broj na rechenici
fs.readFile('lorem.txt', 'utf8', (err, data) => {
    if (err){
        console.log('ERROR');
        return;
    }
    let data3 = data.split('.');
    console.log(data3.length);
});

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