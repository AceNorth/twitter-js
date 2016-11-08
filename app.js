const express = require('express');
const app = express();
const volleyball = require('volleyball');
const router = express.Router();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const routes = require('./routes/');

app.use(function(req, res, next) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  next();
})

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(volleyball);
app.use('/', routes);

app.use(express.static('public'));


// var coolPeepsPage = {
// 	"title" : "An Example",
// 	"people" : [
// 	{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}
// 	]
// }
// var rendered = nunjucks.render('index.html', coolPeepsPage);



router.get('/', function(req, res) {
	res.send("Welcome to our Twitter, HIIIIIII!");

})

router.get('/news', function(req, res) {
	res.send("This is our news page!");
})

app.listen(3000, function() {
	console.log("We are listening!");

});
