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

/*document.addEventListener('DOMContentLoaded', function(){

	'use srtict';

	var header = document.querySelector('.header').scrollHeight;
	var nav_block = document.querySelector('.nav_block').scrollHeight;
	
	var full_height = header + 120;

	window.onscroll = function() {

  		var scrolled = window.pageYOffset || document.documentElement.scrollTop;

			if ( scrolled > full_height) {

				document.querySelector('.nav_block').classList.add('fixed');
			
			} else {

				document.querySelector('.nav_block').classList.remove('fixed');
			}
	}

	


})
*/

