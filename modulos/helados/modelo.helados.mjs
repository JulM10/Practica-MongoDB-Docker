import db from '../conexion.bd.mjs'
import { ObjectId } from 'mongodb'



export async function obtenerTodos(){
    try{
        //1 - referenciar a la base
        const coleccion = db.collection('productos')
        //2 - hacer consulta
        const resultado = coleccion.find()
        // 3 - convertir a arreglo
        const arreglo = await resultado.toArray()
        // respondemos
        return arreglo
    }catch(error){
        console.log(error)
        throw new Error(error)    
    }
  
}
export async function obtenerUno(id){
  try {
    const objId = new ObjectId(id)
    const coleccion = db.collection('productos')
    const resultado = await coleccion.findOne({ _id: objId })
    return resultado
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
export async function crearUno(producto){
      try {
    const coleccion = db.collection('productos')
    const resultado = await coleccion.insertOne(producto)
    return resultado.insertedId // ID del nuevo documento insertado
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
export async function actualizarUno(id,producto){
    try{
        const objId= new ObjectId(id)
        //1 - referenciar la coleccion
        const coleccion = db.collection('productos')
        //2 - hacer consulta
        const resultado = await coleccion.updateOne({_id:objId},{$set:producto})
        // respondemos
        return resultado.modifiedCount
    }catch(error){
        console.log(error)
        throw new Error(error)   
    }
}
export async function eliminarUno(id){
      try {
    const objId = new ObjectId(id)
    const coleccion = db.collection('productos')
    const resultado = await coleccion.deleteOne({ _id: objId })
    return resultado.deletedCount // devuelve 1 si se eliminó, 0 si no se encontró
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
