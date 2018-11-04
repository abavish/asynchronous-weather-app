const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch the weather for',
      string: true //parse as string
    }
  })
  .help()
  .alias('help', 'h')
  .argv
// console.log(argv);
//
// console.log(argv.address)

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }
  else {
    // console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(results.latitiude, results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log(`The weather in ${results.address} is ${weatherResults.temperature} but feels like ${weatherResults.apparentTemperature}`);
      }
    })
  }
})
