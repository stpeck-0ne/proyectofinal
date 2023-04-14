const { upProducto } = require('../../services/func/upProducto')

/**
 * @param {import('express').Request} req
 * @param {import('express').Responsee} res
 */
const updateProducto = (req, res) => {
  const { id, descripcion, nombre, precio, disponibilidad, imagen } = req.body

  if (!id) return res.status(500).send({ msg: 'id not provided' })
  if (!descripcion && !nombre && !precio && !disponibilidad && !imagen) {
    return res.status(500).send({
      msg: 'No modificaste ninguna propiedad',
      properties: {
        descripcion: null,
        nombre: null,
        precio: null,
        disponibilidad: null,
        imagen: null
      }
    })
  }

  upProducto({ id, descripcion, nombre, precio, disponibilidad, imagen })
    .then((p) => {
      res.status(200).send(p)
    })
    .catch(e => {
      res.status(500).send({ error: e })
    })
}

module.exports = { updateProducto }
