document.addEventListener('DOMContentLoaded', function(){

	'use strict';

	var name = document.querySelector('input[name="name"]');
	var phone = document.querySelector('input[name="phone"]');
	var mail = document.querySelector('input[name="email"]');

	name.onblur = vName;
	phone.onblur = vPhone;
	mail.onblur = vMail;

	$("#form").submit(function() {

		if(name.classList.contains('error') || name.value == "" ){
			name.classList.add('error');
			name.nextElementSibling.classList.add('error');
			name.nextElementSibling.innerHTML = "&#10006;";
			return false
		} else {
			
			if (phone.classList.contains('error') || phone.value == ""){
				phone.classList.add('error');
				phone.nextElementSibling.classList.add('error');
				phone.nextElementSibling.innerHTML = "&#10006;";
				return false;
			}else {
				if(mail.classList.contains('error') || mail.value == ""){
					mail.classList.add('error');
					mail.nextElementSibling.classList.add('error');
					mail.nextElementSibling.innerHTML = "&#10006;";
					return false;
				} else {
					$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function() {
					$(this).find("input").val("");
					$('.success_popup').addClass('open');
					$("#form").trigger("reset");
				});
				return false;
				}
			}

		}
		
	});
	

	function vName(){

		if(this.value.length >= 2){

			if (this.classList.contains('error')){

					this.classList.remove('error')
					this.classList.add('right');
					this.nextElementSibling.classList.remove('error');					
					this.nextElementSibling.classList.add('right');
					this.nextElementSibling.innerHTML = "&#10004;";

			} else {

					this.classList.add('right');
					this.nextElementSibling.classList.add('right');
					this.nextElementSibling.innerHTML = "&#10004;";
			}

		} else {

			if (this.classList.contains('right')){

				this.classList.remove('right');
				this.classList.add('error');
				this.nextElementSibling.classList.remove('right');
				this.nextElementSibling.classList.add('error');
				this.nextElementSibling.innerHTML = "&#10006;";
				
			} else {

					this.classList.add('error');
					this.nextElementSibling.classList.add('error');
					this.nextElementSibling.innerHTML = "&#10006;";
				}

		}

	}

	function vPhone(){

		var regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

		if ( regExp.test(this.value)) {

			if (this.classList.contains('error')){

					this.classList.remove('error');
					this.classList.add('right');
					this.nextElementSibling.classList.remove('error');	
					this.nextElementSibling.classList.add('right');
					this.nextElementSibling.innerHTML = "&#10004;";
				
			} else {

					this.classList.add('right');
					this.nextElementSibling.classList.add('right');
					this.nextElementSibling.innerHTML = "&#10004;";
				}
		} else {

			if (this.classList.contains('right')){

					this.classList.remove('right');
					this.classList.add('error');
					this.nextElementSibling.classList.remove('right');
					this.nextElementSibling.classList.add('error');
					this.nextElementSibling.innerHTML = "&#10006;";

			} else {

					this.classList.add('error');
					this.nextElementSibling.classList.add('error');
					this.nextElementSibling.innerHTML = "&#10006;";
			}
		}

	}

	function vMail () {

			var regExp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;

		if ( regExp.test(this.value)) {

			if (this.classList.contains('error')){

					this.classList.remove('error');
					this.classList.add('right');
					this.nextElementSibling.classList.remove('error');	
					this.nextElementSibling.classList.add('right');
					this.nextElementSibling.innerHTML = "&#10004;";
				
			} else {

					this.classList.add('right');
					this.nextElementSibling.classList.add('right');
					this.nextElementSibling.innerHTML = "&#10004;";
				}
		} else {

			if (this.classList.contains('right')){

					this.classList.remove('right');
					this.classList.add('error');
					this.nextElementSibling.classList.remove('right');
					this.nextElementSibling.classList.add('error');
					this.nextElementSibling.innerHTML = "&#10006;";

			} else {

					this.classList.add('error');
					this.nextElementSibling.classList.add('error');
					this.nextElementSibling.innerHTML = "&#10006;";
			}
		}

	}

});

