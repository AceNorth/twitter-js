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
const bodyParser = require('body-parser');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm : true } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

// This is how to include style.css without using express.static
// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('/Users/Jean/Documents/fullstack/Junior-Phase/Week-2/twitter-js/public/stylesheets/style.css');
// })

router.get('/users/:name', function(req, res) {
	res.render('index', {name: req.params.name, tweets: tweetBank.find({name : req.params.name})});
})

router.post('/compose/:tweet', function(req, res){
	tweetBank.add("AndyJean", req.params.tweet);
	alert("GREAT POST BUDDY");
	res.render('index', { tweets: tweetBank.list()});
})

module.exports = router;
