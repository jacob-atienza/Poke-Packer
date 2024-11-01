const express = require('express')
const router = express.Router()
const Card = require('../models/card')

// GET all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find({})
    res.json(cards)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
