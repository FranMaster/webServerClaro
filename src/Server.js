 require('./config/config');
 const express = require('express');
 var bodyParser = require('body-parser')
 let app = express();
 //supuesta base de datos

 app.use(require('./routes/UsuariosRoutes'));
 app.use(require('./routes/LoginRoutes'));
 app.use(require('./routes/RecargasRoutes'));


 app.listen(process.env.PORT, () => {
     console.log('Server On: ' + process.env.PORT);
 })