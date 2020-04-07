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

router.post('/', [
  check('company').isLength({min: 3}),
  check('model').isLength({min: 3})
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()})
  }
  const car = new Car({
    company: req.body.company,
    model: req.body.model,
    year: req.body.year,
    sold: req.body.sold,
    price: req.body.price,
    extras: req.body.extras
  })
  const result = await car.save()
  res.status(201).send(result)
})