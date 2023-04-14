const { pool } = require('../db')

const crearProducto = ({ descripcion, nombre, precio, disponibilidad, imagen }) => {
  return new Promise((resolve, reject) => {
    pool.query('insert into productos (descripcion, nombre, precio, disponibilidad, imagen) values (?,?,?,?,?)',
      [descripcion, nombre, precio, disponibilidad, imagen], (err, res) => {
        if (err) return reject(err)
        return resolve(res)
      })
  })
}

module.exports = { crearProducto }
