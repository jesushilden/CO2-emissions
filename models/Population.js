const mongoose = require('mongoose')

const populationSchema = new mongoose.Schema({
    year: String,
    value: String,
    country: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' }]
})

populationSchema.statics.format = (population) => {
    return {
        id: population._id,
        year: population.year,
        value: population.value,
        country: population.country
    }
}

const Population = mongoose.model('Population', populationSchema)

module.exports = Population