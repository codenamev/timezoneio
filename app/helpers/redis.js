var redis = require('redis');

var redisConfig = {
  ttl: 14 * 86400 // 14 days expiration
};

if (process.env.NODE_ENV === 'production') {
  redisConfig.url = process.env.REDIS_URL;
} else {
  redisConfig.host = 'redis';
}

var client = redis.createClient(redisConfig);

// This is a simple wrapper so we can re-use the active redis connection

client.on('error', function (err) {
  console.log('Error ' + err);
});

module.exports = client;
