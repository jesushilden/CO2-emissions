const mongoose = require('mongoose')

const emissionSchema = new mongoose.Schema({
    year: String,
    value: String,
    country: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' }]
})

emissionSchema.statics.format = (emission) => {
    return {
        id: emission._id,
        year: emission.year,
        value: emission.value,
        country: emission.country
    }
}

const Emission = mongoose.model('Emission', emissionSchema)

module.exports = Emission