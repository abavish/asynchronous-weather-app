const request = require('request')

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address)
  const APIkey = 'AWU07GqEPOYKIqgEGGbDcVNi3Df1SY9t'
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${APIkey}&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to server')
    }else{
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitiude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      })
    }
  })
}

module.exports.geocodeAddress = geocodeAddress
