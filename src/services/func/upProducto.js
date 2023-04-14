const { pool } = require('../db')

const upProducto = async ({ id, descripcion, nombre, precio, disponibilidad, imagen }) => {
  const res = []

  if (nombre) {
    const p = await updateNombre({ id, nombre })
    res.push(p)
  }

  if (descripcion) {
    const p = await updateDescripcion({ id, descripcion })
    res.push(p)
  }

  if (precio) {
    const p = await updatePrecio({ id, precio })
    res.push(p)
  }

  if (disponibilidad) {
    const p = await updateDisponibilidad({ id, disponibilidad })
    res.push(p)
  }

  if (imagen) {
    const p = await updateImagen({ id, imagen })
    res.push(p)
  }

  return res
}

const updateNombre = ({ id, nombre }) => {
  return new Promise((resolve, reject) => {
    pool.query('update productos set nombre = ? where id_producto = ?', [nombre, id], (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}

const updateDescripcion = ({ id, descripcion }) => {
  return new Promise((resolve, reject) => {
    pool.query('update productos set descripcion = ? where id_producto = ?', [descripcion, id], (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}

const updatePrecio = ({ id, precio }) => {
  return new Promise((resolve, reject) => {
    pool.query('update productos set precio = ? where id_producto = ?', [precio, id], (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}

const updateDisponibilidad = ({ id, disponibilidad }) => {
  return new Promise((resolve, reject) => {
    pool.query('update productos set disponibilidad = ? where id_producto = ?', [disponibilidad, id], (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}

const updateImagen = ({ id, imagen }) => {
  return new Promise((resolve, reject) => {
    pool.query('update productos set imagen = ? where id_producto = ?', [imagen, id], (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}

module.exports = { upProducto }
