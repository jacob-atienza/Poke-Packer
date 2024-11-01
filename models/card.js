const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  id: String,
  name: String,
  imageUrl: String,
  rarity: String,
  pack: String,
})

module.exports = mongoose.model('Card', cardSchema)
