# FriendFinder

Friend Finder - Node and Express Server

### Overview

This is a compatibility-based "Friend Finder" application -- basically a dating app. This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Express was used to handle routing and deployed using Heroku so other users can fill it out.

Survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

Some of the basic npm packages that were used were `express`, `body-parser` and `path`.

The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default USE route that leads to `home.html` which displays the home page. 

The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route is also used to handle the compatibility logic. 

Data is saved in the app as an array of objects. 

We determine the user's most compatible friend using the anwers given.  The closest match will be the user with the least amount of difference.

Once we have found the current user's most compatible friend, we display the result as a modal pop-up.
   * The modal displays both the name and picture of the closest match. 

