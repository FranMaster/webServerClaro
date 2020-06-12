let RECARGA = require('../models/RecargaModel.js');
let PCR = require('../models/pcrModels.js');

const express = require('express');
let app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//Realizar el guardado de la recarga
app.post('/Recargas', (req, res) => {

    let body = req.body;
    if (Object.keys(body).length === 0)
        return res.status(403).json({
            mensagge: 'error',
            data: {
                mensagge: 'sin metadata'
            }
        });
    let recargaRealizada = {
        nombreDelPunto: body.nombreDelPunto,
        NumeroARecargar: body.NumeroARecargar,
        monto: body.monto,
        hora: body.hora,
        fecha: body.fecha,
        ubicacion: body.ubicacion
    }
    RECARGA.push(recargaRealizada);

    return res.status(200).json({
        mensagge: 'ok',
        data: recargaRealizada
    });
})

//Realizamos la peticion del listado de Recargas
app.get('/Recargas', (req, res) => {
    let body = req.query.nombreDelPunto
    console.log(body);
    if (body == '' || body == undefined)
        return res.status(403).json({
            mensagge: 'error',
            data: {
                mensagge: 'Pcr is Required '
            }
        });

    let arrayr = [];
    RECARGA.forEach(item => {
            if (item.nombreDelPunto == body)
                arrayr.push(item)
        }


    );



    res.status(200).json({
        mensagge: 'ok',
        data: arrayr
    });

})


module.exports = app;