$(document).ready(function(){
	$('.list_item').hover(function(){
		//mouse enter
		$(this).fadeTo('fast', .5, function(){
			});
		},
		//mouse exit
		function(){
			$('.list_item').fadeTo(0, 1, function(){
			});
	});
	$('#contact-links li').hover(function(){
		//mouse enter
		$(this).fadeTo('fast', .5, function(){
			});
		},
		//mouse exit
		function(){
			$('#contact-links li').fadeTo(0, 1, function(){
			});
	});
});
