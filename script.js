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


const $name = $('input[type=text]');
userInput = '';
const nameNums = [];
const binaryName = [];


// if you click it, it will take your identity 
$('form').on('submit', (e) => {
	e.preventDefault();
	userInput = $name.val();
	$name.val('');

	// convert each character of name to ascii number
	const nameArr = userInput.split('');
	nameArr.forEach((char) => {
		nameNums.push(char.charCodeAt(0));
	});

	// name in binary
	nameNums.forEach((num) => {
		const holdBin = num.toString(2);
		binaryName.push(holdBin);
	});
	console.log(binaryName);

	const displayName = $('<p>');
	$('form').text(binaryName);
});



