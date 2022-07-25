const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio.'],
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio.'],
    },
    doc: {
        type: String,
        required: [true, 'El DNI es obligatorio.'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio.'],
        unique: true
    },
    pass: {
        type: String,
        required: [true, 'La contraseña es obligatoria.']
    },
    celular: {
        type: String,
        required: false,
        default:'Sin registrar'
    },
    nacimiento: {
        type: String,
        required:false,
        default:'Sin registrar'
    },
    google: {
        type: Boolean,
        default: false
    },
    img: {
        type: String,
        default:'Sin avatar'
    },
    rol: {
        type: String,
        required: true,
        enum: ['ROOT', 'CLIENT'],
        default: 'CLIENT'
    },
    estado: {
        type: Boolean,
        default: true
    }



});

module.exports = model('Usuario', UsuarioSchema);