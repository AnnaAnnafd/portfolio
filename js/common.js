$(document).ready(function(){

	// header_full_screen
	function heightDetect() {
		$(".header").css("height", $(window).height());
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

});

// Preloader

$(window).load(function() {

	$(".loader").fadeOut();
	$(".pre_loader").delay(400).fadeOut("slow");

});

