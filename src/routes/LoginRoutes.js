let RECARGA = require('../models/RecargaModel.js');
let PCR = require('../models/pcrModels.js');
let usuarios = require('../models/usuarioModel.js');
const express = require('express');
let app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.post('/login', (req, res) => {

    let body = req.body;
    if (Object.keys(body).length === 0)
        return res.status(403).json({
            mensagge: 'error',
            data: {
                mensagge: 'Ingrese todos los campos '
            }
        });

    let user = usuarios.find((item) => item.email == body.email && item.password == body.password);
    if (user == null) {
        return res.status(400).json({
            menssage: 'error',
            data: {
                menssage: 'user or password incorrect',
                data: null
            }
        });
    };

    let punto = PCR.find((item) => item.email == body.email);
    if (punto == null) {
        return res.status(400).json({
            mensagge: 'not found',
            data: {
                mensagge: 'Usuario sin Pcr Asigando',
                data: null
            }
        });
    };

    let user2 = {
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        rol: user.rol,
        telefono: user.telefono
    };

    res.status(200).json({
        mensagge: 'ok',
        data: {
            datosusuario: user2,
            pcr: punto
        }
    });
});

module.exports = app;