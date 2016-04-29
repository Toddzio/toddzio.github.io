$(document).ready(function() {
	$(document.body).one("click",function() {
	  $('#photo').animate({
	  	left: '-200%'
	  }, 7000, function(){});
	  $(".hidden").fadeOut("slow", function() {
    $(this).removeClass("loader");
	});
	  $( ".hidden" ).css('visibility','visible').hide().fadeIn(7000);

	});
	$('.slider').slick({
    arrows: true,
    lazyLoad: 'ondemand'
  });

// $('.single-item').slick();
});


// .removeClass( "big-blue", 1000, "easeInBack" );