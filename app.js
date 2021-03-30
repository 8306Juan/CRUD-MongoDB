const express = require('express');
const bodyparser = require('body-parser');
const app = express();


//parse application/x-www-forum-urlencoded
app.use(bodyparser.urlencoded({extended: false}));
//parse application/json
app.use(bodyparser.json());


const port= 3000;


// Conexion a Base de Datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/veterinaria', 
	{ useNewUrlParser: true, useUnifiedTopology:true })

	.then(() => console.log("Base de datos conectada"))
	.catch(e => console.log(e))


// Motor de plantillas
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');


//	Midleware

app.use(express.static(__dirname + '/public'))


// Rutas
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));
app.use('/clientes', require('./router/Clientes'));


// Rutas a Errores
app.use((req, res, next)=>{
	res.status(404).render("404", {
		titulo : "Error 404",
		descripcion : "Pagina no Encontrada",
		description : "Page not Found"
	});
})

// Inicio del Servidor

app.listen(port, ()=>{
	console.log(`Serviodor listo en: http://localhost:${port}`);
})