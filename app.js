// Cargando modulo
let http = require('http');

// Servidor implementado para responder Hola Mundo
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end("Hola mundo v2");
}).listen(8080);