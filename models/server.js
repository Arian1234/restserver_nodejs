const express = require('express')
const cors = require('cors');
const { dbConecction } = require('../database/config.database');
class Server {

   constructor() {
      this.app = express();
      this.port = process.env.PORT;
      this.couriersPath = '/api/couriers';
      this.usuariosPath = '/api/usuarios';
      //conectar a db
      this.conectarDB();
      //Middlewares
      this.middlewares();
      // Rutas de mi aplication
      this.routes();
   }
   async conectarDB() {
      await dbConecction();
   }
   middlewares() {
      // Usando cors para algo  de proteccion
      // uno nunca sabe
      this.app.use(cors())
      //Lectura y parseo de JSON
      this.app.use(express.json())
      //Directorio publico 
      this.app.use(express.static('public'));
   }
   routes() {
      this.app.use(this.couriersPath, require('../routes/couriers.route'));
      this.app.use(this.usuariosPath, require('../routes/usuarios.route'));

   }
   listen() {
      this.app.listen(this.port || 3000, () => {
         console.log('Servidor corriendo en puerto=> ', this.port);
      });
   }

}
module.exports = Server;