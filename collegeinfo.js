var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('collegeinfo.html', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});