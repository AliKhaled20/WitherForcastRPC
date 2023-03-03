const rpc = require('json-rpc2');

const client = rpc.Client.$create(3000, 'localhost');

client.call('getWeather', { city: 'Ramallah' }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
})