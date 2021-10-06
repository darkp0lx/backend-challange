require('./mongo')
const express = require('express')
const app = require('./app')

app.use(express.json())
const PORT = 4002

const server = app.listen(PORT, () => {
  console.log('Server listening on ' + PORT)
})

module.exports = { server, app }
