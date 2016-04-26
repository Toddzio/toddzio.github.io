$(document).ready(function() {
	$(document.body).one("click",function() {
	  $('#photo').animate({
	  	right: 400
	  }, 3500, function(){});
	  $( ".hidden" ).css('visibility','visible').hide().fadeIn(7000);

	});
	$('.slider').slick({
    arrows: true,
    lazyLoad: 'ondemand'
  });

// $('.single-item').slick();
});


// .removeClass( "big-blue", 1000, "easeInBack" );