//variables
var data = require('../data.json');
var loginStatus = data.currentUser.loginStatus;
var currentPageViewed = data.currentUser.currentPageViewed;

//check current User status

//for new user
//shows Popular Categories
if (loginStatus === false){
	console.log('New User is incoming');

		var popular = data.categories[1]['popular'];
		data.currentUsercategoryList.push(popular);
		data.currentUser.currentCategorySelected ="Popular";

}
//shows Favorite Categories
else {
	console.log('Returning User is incoming');

		var favorite = data.categories[2]['favorite'];
		data.currentUsercategoryList.push(favorite);
		data.currentUser.currentCategorySelected ="Favorite";
}

//update current user's location
if(currentPageViewed === null){
	data.currentUser.currentPageViewed = "Home";
}

exports.view = function(req, res){
	res.render('index', data);
};
