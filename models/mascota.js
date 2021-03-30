const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
	nombre: String,
	color: String,
	raza: String
})

// crear modelo

const Mascota = mongoose.model('Mascota', mascotaSchema, "Animales");

module.exports = Mascota;