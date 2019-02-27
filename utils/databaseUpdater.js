const axios = require('axios')

const Country = require('../models/Country')
const Emission = require('../models/Emission')
const Population = require('../models/Population')

const countriesUrl = 'https://api.worldbank.org/v2/country?per_page=500&format=json'


updateDatabase = async () => {
    updateCountries()
}

updateCountries = async () => {
    console.log('removing documents...')
    await Country.deleteMany({})
    console.log('updating database...')
    axios.get(countriesUrl).then(response => {
        const countriesData = response.data[1]
        const countriesObjects = countriesData.map(countryData => new Country({
            _id: countryData.iso2Code,
            name: countryData.name,
            emissions: [
                new Emission({
                    year: 1995,
                    value: 12345
                })
            ],
            populations: [
                new Population({
                    year: 1995,
                    value: 5000000
                })
            ]
        }))
        const countryPromiseArray = countriesObjects.map(country => country.save())
        Promise.all(countryPromiseArray)
    })
    console.log('database updated!')
}



module.exports = updateDatabase