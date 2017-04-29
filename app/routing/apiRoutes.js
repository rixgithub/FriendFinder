// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results.
 // This route will also be used to handle the compatibility logic.

var friendsData = require('../data/friends.js');

module.exports = function (app) {

	
 	app.get('/api/friends', function (req, res) {
 		res.json(friendsData);
 	});

 	app.post('/api/friends', function (req, res) {
 		friendsData.push(req.body);
 		// console.log(friendsData[0].scores);
 		// console.log(req.body.scores);

 		newUserData = req.body;
 		newUserScore = newUserData.scores;
 		// var totalDifference = 0;

 		// console.log(newUserData);
 		// console.log(newUserScore);
 		var bestFriends = {
 			name: "",
 			photo: "",
 			bestFriendNumber: 100
 		}

 		console.log(newUserScore);

 		// loop through the friendsData array except the last one which will be the new user
 		for (var i = 0; i < friendsData.length - 1; i++) { 			
 			// console.log(friendsData[i]);
 			// console.log(friendsData[i].scores);
 			totalDifference = 0;

 			// loop through the 10 scores of each object from first loop 
 			// and subtract the newUserScore with the friends scores and add them together
 			for (var j = 0; j < 10; j++) {
 				totalDifference = totalDifference + Math.abs( parseInt(newUserScore[j]) - parseInt(friendsData[i].scores[j]) );
 				console.log(totalDifference);

 				if (totalDifference <= bestFriends.bestFriendNumber) {
 					bestFriends.name = friendsData[i].name;
 					bestFriends.photo = friendsData[i].photo;
 					bestFriends.bestFriendNumber = totalDifference;
 				}

 			}

 		}
 		console.log(bestFriends);
 		res.json(bestFriends);
 	});

}


// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. 
// Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! 
// Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
