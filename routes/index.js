// router.get('/', function(req, res) {
//   res.send("Welcome to our Twitter, HIIIIIII!");
// })

// router.get('/news', function(req, res) {
//   res.send("This is our news page!");
// })

// app.listen(3000, function() {
//   console.log("We are listening!");
// });

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// This is how to include style.css without using express.static
// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('/Users/Jean/Documents/fullstack/Junior-Phase/Week-2/twitter-js/public/stylesheets/style.css');
// })



module.exports = router;
