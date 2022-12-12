// Cargando modulo, se importa usando la instrucción requiere
let http = require('http');
const url = require ('url'); // Importanción de módulo url
const rd = require('./modules/retrievedate'); // Modulo propio cargado

// Servidor implementado para responder Hola Mundo
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.writeHead(200,{'charset': 'utf-8'})
    res.write("La fecha y hora del servidor es: " + rd.RetrieveDate());
    res.write(req.url);
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    //res.end("Hola mundo v2");
    res.end(text);
}).listen(8080);