// DEPENDEMCIES - NPM packages to download
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');

// Sets up our express server
var app = express();
// Set up a port number and process.env is for Heroku deployment
var PORT = process.env.PORT || 8080

// Body-parser code 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, 'public')));

// require the api and html route files using module.exports
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// Listener function
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});