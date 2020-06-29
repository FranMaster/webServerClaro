 require('./src/config/config');
 const express = require('express');
 var bodyParser = require('body-parser')
 let app = express();
 //supuesta base de datos
 const hbs = require('hbs');

 
 // Express HBS engine
 hbs.registerPartials(__dirname + '/views/parciales');
 app.set('view engine', 'hbs');
 app.use(require('./src/routes/LoginRoutes'));
 app.use(require('./src/routes/UsuariosRoutes'));
 app.use(require('./src/routes/RecargasRoutes'));
 app.listen(process.env.PORT, () => {
     console.log('Server On: ' + process.env.PORT);
 })