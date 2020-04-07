const mongoose = require('mongoose')
const express = require('express')
const Car = require('../models/car')
const router = express.Router()

const { check, validationResult } = require('express-validator')

router.get('/', async (req, res) => {
  const cars = await Car.find()
  res.send(cars)
})

router.get('/:id', async (req, res) => {
  const car = await Car.findById(req.params.id)
  if (!car) return res.status(404).send('Car not found')
  res.send(car)
})