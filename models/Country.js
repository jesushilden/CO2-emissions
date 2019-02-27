const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    _id: String,
    name: String,
    emissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Emission' }],
    populations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Population' }]
})

countrySchema.statics.format = (country) => {
    if (country.emissions.length > 0 && country.populations.length > 0) {
        return {
            id: country._id,
            name: country.name,
            emissions: country.emissions,
            populations: country.populations
        }
    } else {
        return {
            id: country._id,
            name: country.name
        }
    }
}

const Country = mongoose.model('Country', countrySchema)

module.exports = Country