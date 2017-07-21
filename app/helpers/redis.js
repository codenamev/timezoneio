var redis = require('redis');
var ENV = require('../../env');

var client = redis.createClient(ENV.REDIS_URL);

// This is a simple wrapper so we can re-use the active redis connection

client.on('error', function (err) {
  console.log('Error ' + err);
});

module.exports = client;
