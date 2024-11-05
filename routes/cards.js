const express = require('express')
const router = express.Router()
const Card = require('../models/card')

router.get('/', async (req, res) => {
  try {
    const { rarity, pack } = req.query
    const query = {}
    if (rarity) query.rarity = rarity

    const conditions = []

    conditions.push({ pack: pack })
    conditions.push({ pack: 'Any Booster Pack' })
    query.$or = conditions

    const cards = await Card.find(query)
    res.json(cards)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
