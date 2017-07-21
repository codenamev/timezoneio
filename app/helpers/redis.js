var redis = require('redis');
var ENV = require('../../env');

var redisConfig = {};

if (ENV.NODE_ENV == 'production') {
  redisConfig.url = ENV.REDIS_URL;
} else {
  redisConfig.host = 'redis';
}

var client = redis.createClient(redisConfig);

// This is a simple wrapper so we can re-use the active redis connection

client.on('error', function (err) {
  console.log('Error ' + err);
});

module.exports = client;
