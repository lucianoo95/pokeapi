const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//Luego se crea una instancia de express ,
//esta linea de codigo le dice al SO que le envie todo lo que entre en el puerto 3000.
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//configuracion global de rutas
app.use(require('./routes/index'));

//Levanto el servidor
app.listen(app.get('port'), () => {
  console.log(`Listening over port: ${app.get('port')}`);
});
