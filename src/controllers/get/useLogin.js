const { login } = require('../../services/func/login')

/**
 * @param {import('express').Request} req
 * @param {import('express').Responsee} res
 */
const useLogin = (req, res) => {
  const { correo, pw } = req.body

  if (!correo) return res.status(500).send({ type: 'Error', message: 'Correo invalido' })
  if (!pw) return res.status(500).send({ type: 'Error', message: 'Password invalido' })

  login({ correo, pw })
    .then(p => {
      if (!p[0]) return res.status(500).send({ type: 'Error', message: 'Credenciales invalidas' })
      res.status(200).send({ session: p })
    })
    .catch(e => {
      res.status(500).send({ error: e })
    })
}

module.exports = { useLogin }
