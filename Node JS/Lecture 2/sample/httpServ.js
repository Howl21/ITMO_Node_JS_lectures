const http = require('http');

const port = 8080;

const server = new http.Server();

server.on('request', function(req, res) {
    res.setHeader("x-power-by", "NodeJS");
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.write('Hello');

    res.write('client');

    res.end("!!!");

    res.on('error', function(err) {
        console.log(err);
    });
});

server.on('listening', function() {
    console.log('Server listen port 8080');
});

server.listen(port);

server.on('connection', function() {
    console.log('new TCP соединение');
});