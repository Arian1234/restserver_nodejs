const { request, response } = require('express');
const bcryptjs=require('bcryptjs');
const Usuario = require('../models/usuarios.model');
const{validationResult}=require('express-validator');
const usuariosControllerGet = function (req, res) {
    const { edad } = req.query;
    res.json({
        nombre: "usuario",
        tipo: "super",
        edad
    })
};
const usuarioControllerPost = async(req, res)  => {
    const { nombre, apellido, doc, correo, pass,celular,nacimiento,google, img} = req.body;
    const usuario = new Usuario({nombre,apellido,doc,correo,pass,celular,nacimiento,google,img});
const validatorerrors=validationResult(req);
if(!validatorerrors.isEmpty()){
    return res.status(400).json(validatorerrors);
}

    //verificamos la existencia del correo
const existsemail=await Usuario.findOne({correo});
if(existsemail){
    return res.status(400).json({
        msg:"El correo ya esta registrado"
    })
}
    //Encriptar la pass
    const salt=bcryptjs.genSaltSync();
    usuario.pass=bcryptjs.hashSync(usuario.pass,salt);
    //Guardar la db
    usuario.save();
    res.json({

        usuario

    })
}
module.exports = {
    usuariosControllerGet,
    usuarioControllerPost
}