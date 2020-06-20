let Usuarios = require('../models/usuarioModel');
const express = require('express');


let app = express();

app.get('/GetUsuarios', (req, res) => {
    res.status(200).json({
        menssage: 'true',
        data: Usuarios
    });
});

module.exports = app;