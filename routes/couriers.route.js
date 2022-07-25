const { Router } = require('express');
const router = Router();
const { courierControllerGet, courierControllerPost, courierControllerDelete, courierControllerPut, courierControllerPatch } = require('../controllers/couriers.controller')


// Obtener
router.get('/', courierControllerGet)
//   Actualizar
router.put('/:id', courierControllerPut)
//Creacion
router.post('/', courierControllerPost)
//   Borrado
router.delete('/', courierControllerDelete)
//Patch (ni se para que se usa aun :)) )
router.patch('/', courierControllerPatch)

module.exports = router;