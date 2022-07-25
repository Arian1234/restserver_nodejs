const { request, response } = require('express');
const bcryptjs=require('bcryptjs');
const Usuario = require('../models/usuarios.model');

const usuariosControllerGet = function (req, res) {
    const { edad } = req.query;
    res.json({
        nombre: "usuario",
        tipo: "super",
        edad
    })
};
const usuarioControllerPost = (req, res) => {
    const { nombre, apellido, doc, correo, pass,celular,nacimiento,google, img} = req.body;
    const usuario = new Usuario({nombre,apellido,doc,correo,pass,celular,nacimiento,google,img});

    //verificamos la existencia del correo

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