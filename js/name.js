





const $input = $('input[type=text]');
const $yearFactCont = $('.fact-container');
const $about = $('#about');
const $name = $('#name');
const $birthday = $('.birthday');
const $age = $('#age');


let sumName;

// reset handler
// $('.reset').click( () => {
// 	$('.fact-container').css('visibility', 'hidden');
// 	$('.ver-line, .hor-line').css('height', '0px');
// 	$('.hor-line').css('width', '0px');
// 	$('form').css('visibility', 'visible');
// 	$('.reset').css('visibility', 'hidden');
// });



// if you submit your name, it will take your identity 
$('form').on('submit', (e) => {

	e.preventDefault();
	// $('.reset').css('visibility', 'visible').hide().fadeIn(3000);

	$('#name-form').css('visibility', 'hidden');

	$yearFactCont.empty();

	const nameNums = [];
	const binaryName = [];

	userInput = $input.val();

	$input.val('');

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


	// animation happens here
	$('.hor-line').hide().show()
	$('.hor-line').animate({width: '100%'}, function(){
		// visibility
		$('.fact-container').hide().show()
		$('.ver-line').css("visibility", "visible");
		$('.ver-line').animate({height: '100%'}, function(){
			$('.info-border').css("visibility", "visible");
			// $('.ver-line2').animate({height: '100%'});
			$('.ver-line3').animate({height: '100%'}, function(){
				$('.ver-line2').animate({width: '0px'});
				$('.ver-line3').animate({width: '100%'});
				$('p').css("visibility", "visible").hide().fadeIn(2000);
			});
		}); 
	});

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

// function to render data from 
function renderYearFact(data) {
	const calcNameTxt = `Your name calculated = ${sumName}`;
	const $calcNamePar = $('<p class="facts">');
	$yearFactCont.append($calcNamePar.text(calcNameTxt));
	const yearFactTemp = `In the year ${sumName}: `; 
	const $yearFactPar = $('<p class="facts">');
	$yearFactCont.append($yearFactPar.text(`In the year ${data.number}: ${data.text}`));
}



