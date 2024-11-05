const env = require('./privatevariables')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(cors())

const router = require('./routes/cards')

mongoose
  .connect(env.MONGODB_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err))

app.use(express.json())

app.use('/cards', router)

const PORT = env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
