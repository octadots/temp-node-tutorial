// const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log(req);
//     if (req.url === '/') {
//         res.end('Welcome to our home page'); // using res.end() directly instead of res.write() and then res.end().
//     } else if (req.url === '/about') {
//         res.end('Here is our short history');
//     } else {
//         res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`);
//     }

// });

// server.listen(5000);

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our home page');
    } else if (req.url == '/about') {
        res.write('Here is our short history');
    } else {
        res.write(`<h1>Oops</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`)
    }
    res.end();
});

server.listen(5000);