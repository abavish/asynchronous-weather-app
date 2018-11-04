const request = require('request')

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/8ae7c7dc4af70b0c99ad2c5e2f738627/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
      // console.log(JSON.stringify(response, undefined, 2));
      if(!error && response.statusCode === 200){
        //calback takes 2 args: errorMessage and results object. In case of success, errorMessage is undefined
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        })
      }
      else{
        callback('Unable to fetch weather')
      }
  })
}

module.exports.getWeather = getWeather
