var redis = require('redis');

var client = redis.createClient(process.env.REDIS_URL);

// This is a simple wrapper so we can re-use the active redis connection

client.on('error', function (err) {
  console.log('Error ' + err);
});

module.exports = client;
