const { crearProducto } = require('../../services/func/crearProducto')

/**
 * @param {import('express').Request} req
 * @param {import('express').Responsee} res
 */
const postProducto = (req, res) => {
  const { descripcion, nombre, precio, disponibilidad, imagen } = req.body

  if (!descripcion) return res.status(404).send({ message: 'La propiedad "descripcion" no puede ser un valor nulo.' })
  if (!nombre) return res.status(404).send({ message: 'La propiedad "nombre" no puede ser un valor nulo.' })
  if (!precio) return res.status(404).send({ message: 'La propiedad "precio" no puede ser un valor nulo.' })
  if (!disponibilidad) return res.status(404).send({ message: 'La propiedad "disponibilidad" no puede ser un valor nulo.' })
  if (!imagen) return res.status(404).send({ message: 'La propiedad "imagen" no puede ser un valor nulo.' })

  crearProducto({ descripcion, nombre, precio, disponibilidad, imagen })
    .then((p) => {
      res.status(200).send(p)
    })
    .catch(e => {
      res.status(500).send({ error: e })
    })
}

module.exports = { postProducto }
