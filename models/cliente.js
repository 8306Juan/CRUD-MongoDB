const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
	nombre: String,
	apellido: String,
	mascota: String
})

// crear modelo

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;