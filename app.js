const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error))

const cardSchema = new mongoose.Schema({
  id: String,
  name: String,
  imageUrl: String,
  rarity: String,
  pack: String,
})

const Card = mongoose.model('Card', cardSchema)

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')))

app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find({})
    res.json(cards)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
