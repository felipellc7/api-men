const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())

const port = process.env.PORT || 3003
app.listen(port, () => {
  console.log(`Listening port: ${port}`)
})

mongoose.connect('mongodb://localhost/carsdb', {useNewUrlParser: true, useUnifiedTopology: true});