console.log('hello world')

let http = require('http');
let port = 64002

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World - nice to see you.');
}).listen(port);
