const mongoose = require('mongoose');

const dbConecction = async () => {
    try {
        await mongoose.connect(process.env.MONGODBCNN);
        console.log('***Base de datos online.***');
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la database');
    }

}

module.exports = {
    dbConecction
}