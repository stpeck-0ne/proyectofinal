const express = require('express')
const router = express.Router()
const { getProductos } = require('../controllers/get/getProductos')
const { postProducto } = require('../controllers/post/postProducto')
const { updateProducto } = require('../controllers/post/updateProducto')
const { useLogin } = require('../controllers/get/useLogin')

router
  .get('/productos', getProductos)
  .post('/producto', postProducto)
  .put('/producto', updateProducto)
  .get('/session', useLogin)

module.exports = { router }
