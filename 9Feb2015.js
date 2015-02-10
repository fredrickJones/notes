// dont trust what comes from the client side
// server is the gatekeeper to your data

// WEB SERVER: 



// always use port 80 for live projects

// in the api folder is all server side items
// in the public folder is non secure and viewable to the public

// express.static
	// app.use(express.static(_dirname + '/public'));


app.get('/api/current_weather', function(req, res) {
	res.json({current_weather: 'partly cloudy'});
});

// twilio
	// sign up for trial developer account
app.post('/api/send_text_message', function(req, res) {
	console.log(req.body.message);
});	

// HERE IS AN EXAMPLE
var express = require('express');    // DONT FORGET TO INSTALL * npm install --save express
var bodyParser = require('body-parser');   // DONT FORGET TO INSTALL * npm install --save body-parser
var request = require('request');   // DONT FORGET TO INSTALL * npm install --save request
var port = 8080;

var app = express();

app.listen(port);
app.use(express.static(_dirname + '/public'));
app.use(bodyParser.json());

app.post('/api/send_text_message', function(req, res) {
	request.post('a bunch of stuff', {
		from: {
			To: '+phone number',
			From: '+phone number',
			Body: req.body.message
		}
	}, function(err, response, body) {
		if(err) {
			return res.status(500).end();
		}
		return res.status(200).end();
	});
});



