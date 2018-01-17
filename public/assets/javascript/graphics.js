$(document).ready(function() {

	// Scroll Reveal //
	window.sr = ScrollReveal();
	sr.reveal('.webProjectDescript', {
		origin: 'bottom',
		distance: '20px',
		rotate: { x: 0, y: 15, z: 0 },
		duration: 2000,
		delay: 50,
		easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
		mobile: true,
	});

	//Turntable.js//
	$('#myTurntable').turntable({
		axis: 'scroll',
		scrollStart: 'top',
		reverse: true,
	});

	$(document).on('click', '.projectImage', function() {
		var value = $(this).attr('id');
		console.log(value);
	});

});
