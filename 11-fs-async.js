// user async file read and write functions from 'fs' module and first read a file and on success 
// read another file and on success write the content of first and second file to another file.
// This will result in callback hell.

const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
         if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result)
        })
    });
});