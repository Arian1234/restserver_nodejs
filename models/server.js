const express = require('express')
const cors = require('cors')
class Server{

   constructor(){
       this.app = express();
       this.port=process.env.PORT;
       this.couriersPath='/api/couriers';
//Middlewares
this.middlewares();
// Rutas de mi aplication
this.routes();
   } 

   middlewares(){
    // Usando cors para algo  de proteccion
    // uno nunca sabe
    this.app.use(cors())
    //Lectura y parseo de JSON
    this.app.use(express.json())
    //Directorio publico 
    this.app.use(express.static('public'));
   }
   routes(){
    this.app.use(this.couriersPath,require('../routes/couriers.route'));
      
   }
   listen(){
    this.app.listen(this.port || 3000,()=>{
        console.log('Servidor corriendo en puerto=> ',this.port);
    });
   }

}
module.exports=Server;