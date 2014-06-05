var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
console.log('ready');


// Middleware para acceso a recursos estáticos
app.use(express.static(__dirname + '/client'));

// Página de prueba
app.get('/', function (req, res, next) {
    res.send('<h1>Web Workers</h1><p>Learning workshop.</p>');
});

console.log('steady');
app.listen(3000);
console.log('go');