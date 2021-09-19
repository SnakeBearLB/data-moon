


const $input = $('input[type=number]');
const $yearFactCont = $('.fact-container');
const $name = $('#name');
let $month;
let $day;
let sumName;



// if you submit your name, it will take your identity 
$('form').on('submit', (e) => {

	e.preventDefault();

  $month = $('#month').val();
  $day = $('#day').val();

	$('form').css('visibility', 'hidden');

	$yearFactCont.empty();

	const nameNums = [];
	const binaryName = [];

	userInput = $input.val();

	$input.val('');

  // DELETE THIS
	// convert each character of name to ascii number
	const nameArr = userInput.split('');
	nameArr.forEach((char) => {
		nameNums.push(char.charCodeAt(0));
	});

  // DELETE THIS
	// add all numbers in nameNums
	sumName = nameNums.reduce((acc, num) => acc + num).toString();
	console.log(sumName);

  // DELETE THIS
	// name in binary
	nameNums.forEach((num) => {
		const holdBin = num.toString(2);
		binaryName.push(holdBin);
	});
	console.log(binaryName);

  // binary birthday
	// display each char in name as binary equivelant 
	// const $displayName = $('<p>');
	// $yearFactCont.append($displayName.text(`Your name in binary:  ${binaryName}`));

	// const changeSett =
	// console.log(settings['url'])

	// animation happens here
	$('.hor-line').animate({width: '100%'}, function(){
		// visibility
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

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://numbersapi.p.rapidapi.com/${$month}/${$day}/date?json=true&fragment=true`,
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
	// const inputInfo = ` = ${sumName}`;
	// const $calcNamePar = $('<p>');
	// $yearFactCont.append($calcNamePar.text(calcNameTxt));
	const $yearFactPar = $('<p>');
	$yearFactCont.append($yearFactPar.text(`On ${monthName($month)}, ${$day} ${data.year} ${data.text}`));
}

// month data 
function monthName(num) {
  num = num-1;
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return monthList[num];
}

