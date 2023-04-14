const { pool } = require('../db')

const login = ({ correo, pw }) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT DISTINCT u.id_usuario, u.correo, u.password,
GROUP_CONCAT(JSON_OBJECT("id", a.id_admin,"nombre", a.nombre, "domicilio", a.domicilio, "telefono", a.telefono )) AS admin, 
GROUP_CONCAT(JSON_OBJECT("id", us.id_user,"nombre", us.nombre, "domicilio", us.domicilio, "telefono", us.telefono ) ) AS standar
from usuarios u
LEFT JOIN admins a ON a.id_admin = u.id_admin
LEFT JOIN usuariostandar us ON us.id_user = u.id_user
where correo = ? and PASSWORD = ?
GROUP BY u.id_usuario;`, [correo, pw], (err, res) => {
      if (err) return reject(err)
      const user = res.map(formatter)
      return resolve(user)
    })
  })
}

const formatter = (obj) => {
  const copyObj = {
    ...obj,
    admin: JSON.parse(`[${obj.admin}]`),
    standar: JSON.parse(`[${obj.standar}]`)
  }

  return {
    ...copyObj,
    admin: copyObj.admin[0].id && copyObj.admin[0],
    standar: copyObj.standar[0].id && copyObj.standar[0]
  }
}

module.exports = { login }
