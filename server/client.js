const express = require('express')
const multer = require('multer')
const app = express()
const path = require('path')
const { router } = require('../src/routes/router')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/file', express.static(path.join(__dirname, './tmp/files')))

let filename = ''
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, './tmp/files'))
  },
  filename: function (req, file, cb) {
    filename = Date.now() + path.extname(file.originalname)
    cb(null, filename)
  }
})

const upload = multer({ storage }).single('file')

app.post('/api/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err != null) {
      console.log(err)
      return
    }
    res.status(201)
      .send({ url: 'http://127.0.0.1:1337/file/' + filename })
  })
})

app.use('/api', router)

module.exports = { app }
