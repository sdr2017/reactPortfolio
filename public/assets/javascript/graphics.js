$(document).ready(function() {

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

	$('#myTurntable').turntable({
		axis: 'scroll',
		scrollStart: 'top',
		reverse: true,
	});
});
