const {Router}=require('express');
const { usuariosControllerGet } = require('../controllers/usuarios.controller');
 const router=Router();


 //obtener el GET
 router.get('/',usuariosControllerGet);

 module.exports=router;