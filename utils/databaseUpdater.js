const Country = require('../models/Country')

updateDatabase = async () => {
    console.log('updating database')

    const country = await Country.create({
        _id: 'FI',
        name: 'Finland'
    })

    console.log(country)
}

module.exports = updateDatabase