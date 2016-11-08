const express = require('express');
const app = express();
const volleyball = require('volleyball');
const router = express.Router();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const routes = require('./routes/');
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  next();
})

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });
app.use(express.static('public'));
//the two lines below configure our parser for different inputs??
app.use(bodyParser.urlencoded({ extended:true})); // this is for HTML
app.use(bodyParser.json()); // this is for AJAX

app.use(volleyball);
app.use('/', routes);



router.get('/', function(req, res) {
	res.send("Welcome to our Twitter, HIIIIIII!");

})

router.get('/news', function(req, res) {
	res.send("This is our news page!");
})

app.listen(3000, function() {
	console.log("We are listening!");

});
