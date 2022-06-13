const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;
let name = 'Tauqeer Ahmed';

function  changeName () {
    name = 'Randy Orton';
}

const server = http.createServer((req, res) => {
    let age = url.parse(req.url,true).query;
    console.log(age);
    res.statusCode = 200;
    changeName();
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>'+age.name+'</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});