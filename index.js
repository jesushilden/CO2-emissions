const express = require('express')
const app = express()

// Middleware for handling requests to unknown endpoints
const error = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.static('build'))
app.use(error)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})