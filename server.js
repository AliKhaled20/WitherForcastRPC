const rpc = require('json-rpc2');
const axios = require('axios');

// create a server
const server = rpc.Server.$create({
  'headers': {
    'Access-Control-Allow-Origin': '*'
  }
});

// add a function to be called by the client
server.expose('getWeather', async (args, opt, callback) => {
  try {
    // Make a request to the weather API
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${args.city}&appid=5768af3d80722e9ad546ff8d7a501d26`);
    const weather = response.data;
    callback(null, weather);
  } catch (error) {
    callback(error, null);
  }
});

server.listen(3000, 'localhost');