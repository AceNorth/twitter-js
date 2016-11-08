const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send("Welcome to our Twitter!")
})

app.listen(3000, function() {
	console.log("We are listening!")
});