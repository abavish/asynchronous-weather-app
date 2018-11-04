const request = require('request')
var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address)
  const APIkey = 'AWU07GqEPOYKIqgEGGbDcVNi3Df1SY9t'
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${APIkey}&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error){
      console.log('Unable to connect to server');
    }
    console.log(`Location is ${body.results[0].providedLocation.location}
      Latitiude : ${body.results[0].locations[0].latLng.lat}
      Longitude : ${body.results[0].locations[0].latLng.lng}`);
  })
}

module.exports = {
  geocodeAddress
}
