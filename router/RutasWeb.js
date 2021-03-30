const express = require('express');
const router = express.Router();

//Rutas

router.get("/", (req, res)=>{
	res.render("index", {titulo : "Mi titulo Dinamico"});
})

router.get('/servicios', (req, res)=>{
	res.render("servicios", {tituloServicios : "Este es un Mensaje dinamico de Servicios"})
})

module.exports = router;