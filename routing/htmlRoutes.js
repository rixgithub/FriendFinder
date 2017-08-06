// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.


// Dependencies - NPM packages
var path = require('path');

// Use module.exports so other pages can attain this code
module.exports = function(app) {
	
	// get request - When users visit /survey they will be pointed to this HTML file
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// .use is for default when users go to anything but /survey they will be given this HTML file
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}