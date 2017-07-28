var redis = require('redis');

var client = redis.createClient(
  process.env.REDIS_URL ? process.env.REDIS_URL : { host: 'redis' }
);

// This is a simple wrapper so we can re-use the active redis connection

client.on('error', function (err) {
  console.log('Error ' + err); // eslint-disable-line no-console
});

module.exports = client;
