const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://numbersapi.p.rapidapi.com/113/trivia?json=true&notfound=floor&fragment=true",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "412f149179msh81d913e7b508961p1f989djsn4fcf5b0efc84"
	}
};


$.ajax(settings).done(function (response) {
	console.log(response);
});


