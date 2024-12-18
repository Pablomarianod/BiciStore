require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bikeRoutes = require('./src/routes/bikes.routes.js');
const connectDB = require('./src/db/configdb.js');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/bikes', bikeRoutes);

app.listen(PORT, ()=> {
    console.log(`BikeStore server on:${PORT}`)
});