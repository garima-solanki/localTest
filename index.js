var express = require('express');
var Twitter = require('twitter');
var Sync = require('sync');
var app = express();

var client = new Twitter({
  consumer_key: 'FZUl0OfzBpmE7O2lNEBTRHO5j',
  consumer_secret: 'tKqz3qATAJz7EGMAX2OHMDnG6M1MREnf3WG9tK6EcunF45yw6Y',
  access_token_key: '4742496138-p5i8hV1XdLsrgXuG1tYroXVHhzYJleG9hQqr08B',
  access_token_secret: 'cObxsYcOZCrR7YqGdGmRmG9BxeHg9X94Ly9IFJXXJZMXW'
});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/getLikesCount', function(request, response) {
	return response.json({
		status: 'OK',
		catalogues: {count : 10055},
    })
});

app.get('/IncrimentLikesCount', function(request, response) {
	return response.json({
		status: 'OK',
		catalogues: {count : 10055},
    })
});
app.get('/twitter', function(request, response) {
response.setHeader('Content-Type', 'application/json');
	var params = {q: 'Levis'};
	var responseObj = { status: '200', catalogues: [] };
	client.get('search/tweets', params, function(error, tweets, resp){
		if (!error) {
		tweets.statuses.forEach(function(item) { 
			var temp = {};			
			temp.Text = item.text;
			temp.fromPictureUrl = item.user.profile_image_url_https;
			postPictureUrl = item.entities.media != undefined ? item.entities.media[0].media_url_https : '';
			responseObj.catalogues.push(temp);
		});
		console.log("twitter api return result", responseObj);

		return response.send(JSON.stringify(responseObj));
	  }
		console.log("twitter api error", error);
	});
	console.log("twitter api called");
	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


