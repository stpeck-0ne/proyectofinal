const mysql2 = require('mysql2')

const pool = mysql2.createPool({
  host: '127.0.0.1',
  port: '3306',
  database: 'projectd',
  password: 'manchester',
  user: 'root'
})

module.exports = { pool }
