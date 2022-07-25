const { Router } = require('express');
const router = Router();
const { usuariosControllerGet, usuarioControllerPost } = require('../controllers/usuarios.controller');


//obtener el GET
router.get('/', usuariosControllerGet);
//obtener el POST
router.post('/', usuarioControllerPost);

module.exports = router;