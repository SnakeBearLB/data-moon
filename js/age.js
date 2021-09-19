





const $input = $('input[type=text]');
const $yearFactCont = $('.fact-container');



let sumName;



// if you submit your name, it will take your identity 
$('form').on('submit', (e) => {

	e.preventDefault();

	$('form').css('visibility', 'hidden');

  const $age = $('#age').val();

	$yearFactCont.empty();

	const nameNums = [];
	const binaryName = [];

	userInput = $input.val();

	$input.val('');

	// convert each character of name to ascii number
	// const nameArr = userInput.split('');
	// nameArr.forEach((char) => {
	// 	nameNums.push(char.charCodeAt(0));
	// });

	// add all numbers in nameNums
	// sumName = nameNums.reduce((acc, num) => acc + num).toString();
	// console.log(sumName);

	// name in binary
	// nameNums.forEach((num) => {
	// 	const holdBin = num.toString(2);
	// 	binaryName.push(holdBin);
	// });
	// console.log(binaryName);

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

	// get fact based on age
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://numbersapi.p.rapidapi.com/${$age}/trivia?json=true&notfound=floor&fragment=true`,
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


  // function to render data from 
  function renderYearFact(data) {
	const ageTxt = `You entered ${$age}`;
	const $ageTxtPar = $('<p>');
	$yearFactCont.append($ageTxtPar.text(ageTxt));
	const $yearFactPar = $('<p>');
	$yearFactCont.append($yearFactPar.text(`${data.number} is ${data.text}`));
}

});




