console.log('hello world')

let http = require('http');
let port = 64001

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World !');
}).listen(port);
