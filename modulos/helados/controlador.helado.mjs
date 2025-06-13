import * as modelo from './modelo.helados.mjs'

export async function obtenerTodos(req, res) {
  try {
    const resultado = await modelo.obtenerTodos()
    if (resultado.length > 0) {
      res.json(resultado)
    } else {
      res.status(404).json({ mensaje: "no hay productos" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: "error en la conexión" })
  }
}

export async function obtenerUno(req, res) {
  try {
    const id = req.params.id
    const resultado = await modelo.obtenerUno(id)
    if (resultado) {
      res.json(resultado)
    } else {
      res.status(404).json({ mensaje: "no hay productos con ese id" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: "error en la conexión" })
  }
}

export async function crearUno(req, res) {
  try {
    const producto = req.body
    if (!producto || !producto.nombre || !producto.precio) {
      return res.status(400).json({ mensaje: "datos incompletos" })
    }

    const idInsertado = await modelo.crearUno(producto)
    res.status(201).json({ mensaje: "producto creado", id: idInsertado })
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: "error en la conexión" })
  }
}

export async function actualizarUno(req, res) {
  try {
    const id = req.params.id
    const producto = req.body

    const modificados = await modelo.actualizarUno(id, producto)

    if (modificados > 0) {
      res.json({ mensaje: "producto actualizado" })
    } else {
      res.status(404).json({ mensaje: "no se encontró el producto para actualizar" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: "error en la conexión" })
  }
}

export async function eliminarUno(req, res) {
  try {
    const id = req.params.id
    const eliminados = await modelo.eliminarUno(id)

    if (eliminados > 0) {
      res.json({ mensaje: "producto eliminado" })
    } else {
      res.status(404).json({ mensaje: "no se encontró el producto para eliminar" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: "error en la conexión" })
  }
}
