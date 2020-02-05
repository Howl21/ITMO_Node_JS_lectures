let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html'
}

http.createServer(function(req, res) {
    if (req.method == 'GET') {
        let pathname = url.parse(req.url).path;
        if (pathname == '/') {
            pathname = '/index.html';
        }
        let extname = path.extname(pathname);
        let mimeType = mimeTypes[extname];
        pathname =
            pathname.substring(1, pathname.length);
        fs.readFile(pathname, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                res.end(data);
            }
        })
    } else {


    }
}).listen(8080);