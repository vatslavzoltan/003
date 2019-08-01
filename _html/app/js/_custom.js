document.addEventListener("DOMContentLoaded", function() {
	var w_width = $( window ).width();

	$('.hamburger').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.page_nav').toggleClass('active');
	});
	
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$('.page_nav').removeClass('active');
		$('.hamburger').removeClass('active');
	
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top-100
		}, 500, 'linear');
	});

	if(w_width >= 768){
		new WOW().init();
	}


});
