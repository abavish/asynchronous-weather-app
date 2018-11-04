const yargs = require('yargs')

const geocode = require('./geocode/geocode')


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

geocode.geocodeAddress(argv.address)
