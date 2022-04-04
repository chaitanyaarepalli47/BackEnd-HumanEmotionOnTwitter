var Twitter = require('twitter');
require('dotenv/config');

const apiKey = process.env.api_key
const apiSecretKey = process.env.api_key_secret
const accessToken = process.env.access_token
const accessTokenSecret = process.env.access_token_secret

var client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret
});

var params = {screen_name: 'avkc007'};
client.get('statuses/user_timeline',params, function(error, tweets, response){
    if(!error){
        console.log(tweets);
    }
});

