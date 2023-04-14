const { selectProductos } = require('../../services/func/selectProductos')

/**
 * @param {import('express').Request} req
 * @param {import('express').Responsee} res
 */
const getProductos = (req, res) => {
  selectProductos()
    .then(p => {
      res.status(200).send({ productos: p })
    })
    .catch(e => {
      res.status(500).send({ error: e })
    })
}

module.exports = { getProductos }
