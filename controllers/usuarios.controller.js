const {request,response}=require('express');

const usuariosControllerGet=function(req,res){
const {edad}=req.query;
    res.json({
nombre:"usuario",
tipo:"super",
edad
    })
}
module.exports={
    usuariosControllerGet
}