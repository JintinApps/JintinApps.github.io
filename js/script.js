

$(function() {

	var f = function(event){
		var $anchor = $(this);
		var obj = $($anchor.attr('href'));
		$('html, body').stop().animate({
			scrollTop: obj.offset() === undefined ? 0 : obj.offset().top - 70
		}, 300);

		event.preventDefault();
	};

	$('.navbar-brand').bind('click',f);
	$('ul.nav a').bind('click',f);
});