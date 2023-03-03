# WitherForcastRPC
This code is attached in the same location with this document , while this 
demonstrates a simple implementation of a remote procedure call (RPC) using 
Node.js and the json-rpc2 library. The code includes both a server and a client, 
which communicate with each other to retrieve weather data for a specified city. 
The server exposes a function called getWeather which takes a city name as an 
argument, makes an API request to the OpenWeatherMap API, and sends the 
weather data back to the client. The client then calls the getWeather function, 
passing in a city name and the city used is Ramallah.
This project represents a basic implementation of a remote procedure call (RPC) using 
Node.js, a widely used JavaScript runtime environment, and the json-rpc2 library. The 
code includes both a server and a client, which communicate with each other to retrieve 
weather data for a specified city. This example is a simple way to understand the concept 
of RPC and how it can be implemented in Node.js. It demonstrates how to make a remote 
call from the client, how to handle the request in the server, and how to send the response 
back to the client. Additionally, it shows how to use Async/Await pattern and error 
handling in the server code. It also uses the axios library to make an HTTP request to the 
OpenWeatherMap API. It should be noted that this example is a basic one, and it doesn't 
cover rate limits or security considerations for a production service
