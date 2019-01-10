const express = require('express')
const app = express()

// Middleware for handling requests to unknown endpoints
const error = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

// Placeholder route
app.get('/', (req, res) => {
    res.send('<h1>Hello World Peter!</h1>')
})

app.use(error)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})