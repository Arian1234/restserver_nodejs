const {response,request}=require('express');

const courierControllerGet=function (req, res) {
    const {nombre,apellido}=req.query;
    res.json({
        ok:true,
        message:'GET-Esta maniobra nos tomara 51 años,estoy en el controller.',
        nombre,
        apellido
    })
  }
const courierControllerPost=function (req, res) {
    const {nombre,edad,documento,gustos}=req.body;
    res.json({
        ok:true,
        message:'POST-Esta maniobra nos tomara 51 años,estoy en el controller.',
        nombre,edad,documento,gustos
    })
  }
const courierControllerDelete=function (req, res) {
    
    res.json({
        ok:true,
        message:'DELETE-Esta maniobra nos tomara 51 años,estoy en el controller.'
    })
  }
const courierControllerPut=function (req, res) {
    const id=req.params.id;
    res.json({
        ok:true,
        message:'PUT-Esta maniobra nos tomara 51 años,estoy en el controller.',
        id
    })
  }
const courierControllerPatch=function (req, res) {
    
    res.json({
        ok:true,
        message:'PATCH-Esta maniobra nos tomara 51 años,estoy en el controller.'
    })
  }

  module.exports= {
    courierControllerGet,
    courierControllerPost,
    courierControllerDelete,
    courierControllerPut,
    courierControllerPatch
  }