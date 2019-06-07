$(document).ready(function () {
	//votre code
	let span = $('.counter > span');
	let count = 0;

	/**
	 * function pour m'afficher un message aleatoire  tout les 20 clicks
	 */
	function modulo() {
		let message = "";
		let number = Math.floor(Math.random()*4+1)
		switch(number){
			case 0:
			message = "Vous ne passerez pas !!";
			break;
			case 1:
			message = "Kévin est une haine ambulante";
			break;
			case 2:
			message = "Mais non ?";
			break;
			case 3:
			message = "INCROYABLEEEE"
			break;
			case 4:
			message = "ok c'est pas à l'infini"
			break;

			default:
			break;
			
		}return message;
	}

	$('.cake').on('click', function () {
		count += Number(span.val() + 1);
		span.text(count);

		//modulo pour les 20 click
		//tout les multiples de 20 sont egal à 0
		if (count % 20 == 0) {
			alert(modulo())
		}

	})


});