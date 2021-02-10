const axios = require('axios')

module.exports = axios.create({
  baseURL: 'https://api.airtable.com/v0/appe2ziFcbLsTOKEe',
  // commbocc@gmail.com account read only api key
  headers: { Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_API_KEY}` },
})
