$(document).ready(function(){

	//full_screen
	function heightDetect() {
		$(".header").css("height", $(window).height());
		$(".mob_menu").css("height", $(window).height());
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

});

$(window).load(function() {

// Preloader
	$(".loader").fadeOut();
	$(".pre_loader").delay(400).fadeOut("slow");

// scroll2id
	$(".menu ul a").mPageScroll2id();
	$(".map a").mPageScroll2id();
	$("a").mPageScroll2id();

// animated
	$('.header-descr').animated('fadeInUp', 'fadeInUp');
	$('.s_title').animated('fadeInDown', 'fadeInDown');
	$('.l_side').animated('fadeInLeft', 'fadeInLeft');
	$('.r_side').animated('fadeInRight','fadeInRight');
	$('.my_photo').animated('fadeInUp','fadeInUp');
	$('.left_content').animated('fadeIn', 'fadeIn');
	$('.right_content').animated('fadeIn','fadeIn');
	$('.s_title_promo.italic').animated('zoomIn','zoomIn');
	$('.skill_descr').animated('fadeInUp','fadeInUp');
	$('.w-exmpl').animated('fadeInUp','fadeInUp');
	$('.callback').animated('fadeInUp','fadeInUp');
	$('.contacts').animated('fadeInUp','fadeInUp');

// typed text
	var typed = new Typed('.element', {
  		strings: ["Нужен сайт?","Поговорим о вашем проекте?"],
  		typeSpeed: 150
	});

});

document.addEventListener('DOMContentLoaded', function(){

	'use srtict';

// navugation

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

	var mobile_btn = document.querySelector('.mob_menu_icon');
	var close_mobile_btn = document.querySelector('.close_btn');

			mobile_btn.addEventListener('click', function(){

				document.querySelector('.mob_menu').classList.add('show_menu');
				mobile_btn.style.opacity = '0';

			});

			close_mobile_btn.addEventListener('click', function(){

					document.querySelector('.mob_menu').classList.remove('show_menu');
					mobile_btn.style.opacity = '100';

			});


})


