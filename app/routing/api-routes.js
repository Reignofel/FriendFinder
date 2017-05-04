
var friends = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friendlist', function (request, response) {
		response.json(friends);
	});


	app.post('/api/friend', function (request, response) {
			var newFriend = request.body;
			var sum = [];

			for(var i=0; i<friends.length; i++) {
				sum[i] = 0;

				for(var j=0; j<3; j++) {
					sum[i] += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
				}
				console.log (sum[i]);	
			}

			friends.push(request.body);
			
			var closestNum = sum.indexOf(Math.min.apply(null,sum));
			var match = friends[closestNum]
			response.json(match); 
	});
}