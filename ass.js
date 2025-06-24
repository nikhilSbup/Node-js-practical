const http = require('http');
var uc = require('upper-case')
const server = http.createServer((req , res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<html>')
    res.write('<head><title>Sri Balaji University</title></head>')
    res.write('<body>')
    res.write(uc.upperCase('<h1>MCA Sem III div B</h1>'))
    res.write('<p>Welcome in node js programming</p>')
    res.write('</body>')
    res.write('</html>')
    res.end();
});

server.listen(3001 , () => {
    console.log('server is running on http://localhost:3001');
});