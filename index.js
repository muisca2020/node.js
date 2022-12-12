const http = require('http'); // Módulo para manejar protocolo http
const fs = require('fs'); // Módulo para manejar el FileSystem 'fs'

http.createServer((req, res) => {
    fs.readFile('./html/demo.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3200);