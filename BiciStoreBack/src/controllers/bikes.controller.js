const { getAllBikesService, getBikeByIdService, createBikeService, updateBikeService, deleteBikeService } = require('../services/bikes.service')

const getAllBikes = async (req, res) => {
    try {
        const bikes = await getAllBikesService();
        res.status(200).json(bikes);
    } catch (error) {
        res.status(500).json({ message:'Error buscando bicicletas', error: error.message });
    }
};

const getBikeById = async (req, res) => {
    const {id} = req.params
    try {
        const bike = await getBikeByIdService(id);
        if(!bike) {
            return res.status(404).json({message: 'Bicicleta no encontrada', error: error.message});
        }
        res.status(200).json({message:'Bicicleta: ', bike});
    } catch (error) {
        res.status(500).json({ message:'Error al buscar la bicicleta', error:error.message });
    }
};

const createBike = async (req, res) => {
    const bikeData = req.body;
    try {
        if (!bikeData.name || !bikeData.price) {
            return res.status(400).json({message: 'Nombre y precio son necesarios'});
        }
        const newBike = await createBikeService(bikeData);
        res.status(201).json({ message: 'Bicicleta creada', data: newBike});
    } catch (error) {
        res.status(500).json({ message:'Error al crear bicicleta', error: error.message});
    }
};

const updateBike = async (req, res) =>{
    const {id} = req.params;
    const bikeData = req.body;
    try {
        const updatedBike = await updateBikeService(id, bikeData);
        if(!updatedBike) {
            return res.status(404).json({message: 'Bicicleta no encontrada'});
        }
        res.status(200).json({message: 'Bicicleta actualizada', data: updatedBike});
    } catch (error) {
        res.status(500).json({message: 'Error al actualizar bicicleta', error: error.message});
    }
};

const deleteBike = async (req, res)=> {
    const {id} = req.params;
    try {
        const deletedBike = await deleteBikeService(id);
        if(!deletedBike) {
            return res.status(404).json({ message: 'Bicicleta no encontrada'});
        }
        res.status(200).json({ message: 'Bicicleta eliminada'});
    } catch (error) {
        res.status(500).json({message:'Error al eliminar bicicleta', error: error.message});
    }
};

module.exports = {
    getAllBikes,
    getBikeById,
    createBike,
    updateBike,
    deleteBike,
};