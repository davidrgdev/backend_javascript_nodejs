const express = require('express'); // Import express from 'express';
const bodyParser = require('body-parser'); // Parsear body
const router = express.Router(); //Import rutas

var app = express(); // Inicializamos express
app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    res.status(200).send('Listar mensajes.');
})

router.post('/message', function(req, res){
    console.log(req.query);
    console.log(req.body);
    res.status(201).send([{error: '', body: 'Creado correctamente.', name: 'David', id: 1}]);
})

/*app.use('/', function(req, res){ // A raíz
    res.send('Hola'); // Responde Hola
});*/

app.listen(3000);

console.log('La aplicación está escuchando en http://localhost:3000');