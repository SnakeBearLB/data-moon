


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
	const $ageTxtPar = $('<p class="facts">');
	$yearFactCont.append($ageTxtPar.text(ageTxt));
	const $yearFactPar = $('<p class="facts">');
	$yearFactCont.append($yearFactPar.text(`${data.number} is ${data.text}`));
}

});





