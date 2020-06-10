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

app.post('/Recargas', (req, res) => {

    let body = req.body;
    let recargaDesdePunto = RECARGA.find((item) => item.NumeroARecargar === body.NumeroARecargar);
    if (recargaDesdePunto === null) {
        return res.status(400).json({
            mensagge: 'not found',
            data: {
                mensagge: 'No se realizo la recarga'
            }
        })
    }
    //CONTRATO
    let datosDeRecarga = {
        NumeroARecargar: recargaDesdePunto.NumeroARecargar,
        nombreDelPunto: recargaDesdePunto.nombreDelPunto,
        monto: recargaDesdePunto.monto,
        fecha: recargaDesdePunto.fecha,
        hora: recargaDesdePunto.hora,
        ubicacion: recargaDesdePunto.ubicacion

    }
    res.status(200).json({
        mensagge: 'ok',
        usuario: datosDeRecarga,

    });





});



Module.exports = app;