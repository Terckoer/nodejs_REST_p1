'use strict'

const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');

mongoose.connect(config.db, (err, res)=>{
    if(err) {
        return console.log(`Fallo al conectarse a la base de datos error: ${err}`);
    }
    console.log("Conexion exitosa!!");
    app.listen(config.port, ()=>{
        console.log(`Server Running on http:/localhost:${config.port}`)
    });

});