const countriesRouter = require('express').Router()
const Country = require('../models/Country')
const Emission = require('../models/Emission')
const Population = require('../models/Population')

countriesRouter.get('/', async (request, response) => {
    const countries = await Country
        .find({})

    response.json(countries.map(Country.format))
})

countriesRouter.get('/:id', async (request, response) => {
    const country = await Country
        .findById(request.params.id)
        .populate('emissions', { year: 1, value: 1 })
        .populate('populations', { year: 1, value: 1 })

    response.json(Country.format(country))
})

module.exports = countriesRouter