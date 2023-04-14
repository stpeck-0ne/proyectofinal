const { pool } = require('../db')

const selectProductos = () => {
  return new Promise((resolve, reject) => {
    pool.query('select * from productos', (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}

module.exports = { selectProductos }
