const app = require('./app')
const express = require('express')

app.use(express.json())
const PORT = 4002

const server = app.listen(PORT, () => {
  console.log('Server listening on ' + PORT)
})

module.exports = { server, app }
