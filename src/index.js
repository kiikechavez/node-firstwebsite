const express = require('express');
const app = express(); //when executing the express function it returns an object and i save it in an app constant that helps us to create a server
const path = require('path');


//settings
app.set('port', 3000);  //This is done to have the port as a variable
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); // html files will have the extension .html but will be processed by ejs
app.set('view engine', 'ejs'); //Esto es para decirle qué motor de plantilla vamos a utilizar

//middlewares: funciones que se ejecutan antes que las rutas procesen algo


//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public'))) //publicar la carpeta public desde el navegador, es decir, cualquier archivo que se cree en public será leído por el navegador

//listening server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});