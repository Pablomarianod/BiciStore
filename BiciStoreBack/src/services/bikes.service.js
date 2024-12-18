const Bike = require('../models/bike.model');

const getAllBikesService = async () => {
    try {
        const bikes = await Bike.find();
        return bikes
    } catch (error) {
        throw new Error('Error al obtener bicicletas', error.message);
    }
};

const getBikeByIdService = async (id) => {
    try {
        const bike = await Bike.findById(id);
        if(!bike) {
            throw new Error('Bicicleta no encontrada');
        }
        return bike;
    } catch (error) {
        throw new Error ('Error al obtener bicicleta', error.message);
    }
};

const createBikeService = async (bikeData) => {
    try {
        const newBike = new Bike(bikeData);
        await newBike.save();
        return newBike; 
    } catch (error) {
        throw new Error('Error al crear la bicicleta', error.message);
    }
};

const updateBikeService = async (id, bikeData) => {
    try {
        const updatedBike = await Bike.findByIdAndUpdate(id, bikeData, {
            new:true,
            runValidators: true,
        });
        if(!updatedBike){
            throw new Error('Bicicleta no encontrada');
        }
        return updatedBike;
    } catch (error) {
        throw new Error('Error al actualizar la bicicleta', error.message);
    }
};

const deleteBikeService = async (id) => {
    try {
        const deletedBike = await Bike.findByIdAndDelete(id);
        if(!deletedBike) {
            throw new Error('Bicicleta no encontrada');
        }
        return deletedBike;
    } catch (error) {
        throw new Error('Error al eliminar bicicleta', error.message);
    }
};

module.exports = {
    getAllBikesService,
    getBikeByIdService,
    createBikeService,
    updateBikeService,
    deleteBikeService,
};