

$(document).ready(function (event) {
	
	var Scroll_Animate = true;
		if(Scroll_Animate == true){	
		AOS.init();
		var Scroll_Animate = false;
		}


	/*preloader until loads all files*/
	$(window).on('load', function(){
		$(".preloader").fadeOut();
		$("body").delay(350).css({'overflow':'visible'});
	})


	/*for waiting 3 seconds*/
	/*setTimeout(
		function(){
		$(".preloader").fadeOut();
		$("body").delay(350).css({'overflow':'visible'});

		}, 3000);*/


	/*Scroll to top function*/	
	$("#totop").click(function () {
		$("html, body").animate({scrollTop:0}, 1500)
	});
	
	$(window).scroll(function (event) {
		if($(this).scrollTop() > 300){
			$("#totop").fadeIn();
		}
		else{
			$("#totop").fadeOut();
		}
	});
	/*scroll to top end*/



	/*slick carousel*/	
	$(".slick").slick({
		arrows : false,
		autoplaySpeed: 2000,
		autoplay: true
	});
	/*slick carousel end*/
	
});
