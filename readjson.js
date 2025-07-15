const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('collegeinfo.json', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('JSON file not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        }
    });
}).listen(3000, function () {
    console.log('Server is running at http://localhost:3000');
});