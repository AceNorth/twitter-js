const express = require('express');
const app = express();
const volleyball = require('volleyball');
const router = express.Router();
const nunjucks = require('nunjucks');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(volleyball);
app.use('/', router);


// var coolPeepsPage = {
// 	"title" : "An Example",
// 	"people" : [
// 	{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}
// 	]
// }
// var rendered = nunjucks.render('index.html', coolPeepsPage);

router.get('/', function(req, res) {
	res.send("Welcome to our twitter, Gandalf");
})

router.get('/news', function(req, res) {
	res.send("This is our news page.");
})

app.listen(3000, function() {
	console.log("We are listening!");

});