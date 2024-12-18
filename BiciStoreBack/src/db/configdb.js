const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Base de datos conectada con exito!');
    } catch (error) {
        console.log('Error al conectar la base de datos', error.message);
    }
};

module.exports = connectDB;