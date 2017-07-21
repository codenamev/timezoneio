var request = require('request');

// API TEST SCRIPT

var LOCAL_TOKEN = '1/1b899a8318e6334d405b5ea88cd73bf51b744a95';

var base = 'http://localhost:80/api';
// var danId = '5585da694156b1885290d649';
var joseId = '5971fcc0aab5ea002c73dd74';

// request.get(base + '/user/' + joseId +'?access_token=' + LOCAL_TOKEN, function(err, res, body) {
//   if (err) return console.error('ERR', err);
//
//   console.log(body);
// });

request
  .put({
    url: base + '/user/' + joseId,
    json: true,
    form: {
      access_token: LOCAL_TOKEN,
      location: 'New York',
      tz: 'America/New_York'
    }
  }, function(err, res, body){

    if (err) return console.error('ERR', err);

    console.info('USER UPDATED:');
    console.log(body);

  });

request
  .post({
    url: base + '/slacky',
    json: true,
    form: {
      "token": "Jhj5dZrVaK7ZwHHjRyZWjbDl",
      "challenge": "3eZbrw1aBm2rZgRNFdxV2595E9CY3gmdALWMmHkvFXO7tYXAYM8P",
      "type": "url_verification"
    }
  }, function(err, res, body) {
    if (err) return console.error('ERR', err);

    console.info('Connected');
    console.log(res.status);
  });
