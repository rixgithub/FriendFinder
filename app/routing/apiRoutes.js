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

 		newUserData = req.body;
 		newUserScore = newUserData.scores;

 		var bestFriends = {
 			name: "",
 			photo: "",
 			bestFriendNumber: 100
 		}

 		// loop through the friendsData array except the last one which will be the new user
    // since friendsData is an array you can just use the native `.forEach` method here
    // this creates a functional closure/scope that won't leak variables.
    friendsData.forEach(function(friend){
      // you always want to declare variables so they don't leak onto the global scope
 			var totalDifference = 0;

 			// loop through the 10 scores of each object from first loop 
 			// and subtract the newUserScore with the friends scores and add them together
      // you can also use the `.forEach` method here..
      // the second argument passed to forEach is the index of the current item you're operating on
      friend.scores.forEach(function(score, i) {
        totalDifference += Math.abs( parseInt(newUserScore[i]) - parseInt(score) );

        if (totalDifference <= bestFriends.bestFriendNumber) {
          bestFriends.name = friend.name;
          bestFriends.photo = friend.photo;
          bestFriends.bestFriendNumber = totalDifference;
        }

      })

 		})
    // since I switched this to loop through the array of friends, this push has to happen later. Otherwise, My user will be my best friend
    friendsData.push(req.body);
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
