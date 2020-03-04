const express = require('express'); // Import express from 'express';
const router = express.Router();

var app = express(); // Inicializamos express

app.use(router);

router.get('/message', function(req, res){
    res.send('Lista de mensajes');
})

router.post('/message', function(req, res){
    res.send('Mensaje añadido');
})

/*app.use('/', function(req, res){ // A raíz
    res.send('Hola'); // Responde Hola
});*/

app.listen(3000);

console.log('La aplicación está escuchando en http://localhost:3000');