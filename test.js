import { readfile } from 'fs'
const fs = require('fs');

fs.readFile('./blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

fs.readFile('./blog.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
})

fs.readFile('./blog.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

