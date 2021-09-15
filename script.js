





const $name = $('input[type=text]');
const $yearFactCont = $('.bin-name-container');


let sumName;

// if you submit your name, it will take your identity 
$('form').on('submit', (e) => {

	e.preventDefault();

	$yearFactCont.empty();

	const nameNums = [];
	const binaryName = [];

	userInput = $name.val();

	$name.val('');

	// convert each character of name to ascii number
	const nameArr = userInput.split('');
	nameArr.forEach((char) => {
		nameNums.push(char.charCodeAt(0));
	});

	// add all numbers in nameNums
	sumName = nameNums.reduce((acc, num) => acc + num).toString();
	console.log(sumName);

	// name in binary
	nameNums.forEach((num) => {
		const holdBin = num.toString(2);
		binaryName.push(holdBin);
	});
	console.log(binaryName);

	// display each char in name as binary equivelant 
	// const $displayName = $('<p>');
	// $yearFactCont.append($displayName.text(`Your name in binary:  ${binaryName}`));

	// const changeSett =
	// console.log(settings['url'])

	// get year fact
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://numbersapi.p.rapidapi.com/${sumName}/year?json=true&fragment=true`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "numbersapi.p.rapidapi.com",
			"x-rapidapi-key": "412f149179msh81d913e7b508961p1f989djsn4fcf5b0efc84"
		}
	};


	$.ajax(settings).done(function (response) {
		console.log(response)
		renderYearFact(response);
	});
});

// function to render 
function renderYearFact(data) {
	const calcNameTxt = `My calculated name = ${sumName}`;
	const $calcNamePar = $('<p>');
	$yearFactCont.append($calcNamePar.text(calcNameTxt));
	const yearFactTemp = `Year ${sumName}: `; 

	// condition to alternate between date and text properties
	const $yearFactPar = $('<p>');
	$yearFactCont.append($yearFactPar.text(`${data.number}: ${data.text}`));
}



