/*
ACTIVIDAD MVC y PG
*/
import express from 'express'
// Importar las rutas
import rutasApi from './modulos/helados/rutas.helados.mjs'

const PUERTO = 3000



const app = express()
app.listen(PUERTO)

// Middleware

// Avisar a express que vamos a recibir JSON
app.use(express.json())
// Avisar a express sobre las rutas
app.use(rutasApi)
