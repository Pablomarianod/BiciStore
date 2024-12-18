const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    price: {
        type: Number,
        required: true,
    },

    description:{
        type: String,
        trim: true,
    },

    stock: {
        type: Number,
        default: 0,
    },
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;