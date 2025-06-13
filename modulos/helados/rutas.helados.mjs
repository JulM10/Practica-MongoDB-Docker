import express from 'express'
import * as controlador from './controlador.helado.mjs'


const rutasApi = express.Router()

rutasApi.get('/api/v1/helados',controlador.obtenerTodos)
rutasApi.get('/api/v1/helados/:id',controlador.obtenerUno)
rutasApi.post('/api/v1/helados',controlador.crearUno)
rutasApi.put('/api/v1/helados/:id',controlador.actualizarUno)
rutasApi.delete('/api/v1/helados/:id',controlador.eliminarUno)


export default rutasApi