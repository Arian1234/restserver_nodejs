const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { usuariosControllerGet, usuarioControllerPost } = require('../controllers/usuarios.controller');


//obtener el GET
router.get('/', usuariosControllerGet);
//obtener el POST
router.post('/',[check('correo','El correo ingresado no tiene el formato esperado.').isEmail()], usuarioControllerPost);

module.exports = router;