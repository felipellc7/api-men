const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

const { check, validationResult } = require('express-validator')

router.get('/list', (req, res) => {
  res.send('router get connect')
})
