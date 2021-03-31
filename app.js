const express = require('express');
const bodyparser = require('body-parser');
const app = express();

// Variables de Entorno
require('dotenv').config()

//parse application/x-www-forum-urlencoded
app.use(bodyparser.urlencoded({extended: false}));
//parse application/json
app.use(bodyparser.json());


const PORT = process.env.PORT || 3000;


// Conexion a Base de Datos
const mongoose = require('mongoose');

const user = process.env.USER;
const password = process.env.PASSWORD;
const dbname = process.env.DBNAME;
const uri = `mongodb+srv://${user}:${password}@cluster0.hgzr4.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
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

app.listen(PORT, ()=>{
	console.log(`Serviodor listo en: http://localhost:${PORT}`);
})