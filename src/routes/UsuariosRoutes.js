const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        menssage: 'hola'
    });
});

module.exports = app;