require('./config/config.js')
const express = require('express');
var bodyParser = require('body-parser');
let app = express();

app.use(require('./routes/UsuariosRoutes'));
app.use(require('./routes/LoginRoutes'));
app.use(require('./routes/RecargasRoutes'));

app.listen(process.env.PORT, () => {
    console.log('Server On: ' + process.env.PORT);
});