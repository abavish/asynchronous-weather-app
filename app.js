const request = require('request')

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=AWU07GqEPOYKIqgEGGbDcVNi3Df1SY9t&location=Fullerton,CA',
  json: true
}, (error, response, body) => {
  console.log(`Location is ${body.results[0].providedLocation.location}
    Latitiude is : ${body.results[0].locations[0].latLng.lat}
    Longitude is ${body.results[0].locations[0].latLng.lng}`);
})
