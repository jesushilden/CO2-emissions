const express = require('express')
const app = express()
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const updateDatabase = require('./utils/databaseUpdater')
const countriesRouter = require('./controllers/countries')

mongoose.connect(config.mongoUri)


app.use('/api/countries', countriesRouter)
app.use(express.static('build'))
app.use(middleware.error)

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})

updateDatabase()