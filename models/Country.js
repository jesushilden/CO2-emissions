const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    _id: String,
    name: String,
    emissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Emission' }],
    populations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Population' }]
})

countrySchema.statics.format = (country) => {
    return {
        id: country._id,
        name: country.name,
        emissions: country.emissions,
        populations: country.populations
    }
}

const Country = mongoose.model('Country', countrySchema)

module.exports = Country