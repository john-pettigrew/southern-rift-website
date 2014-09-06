

$(document).ready(function(){
	//Decide which view is needed.
	var desktopContent = "<video class=\"main-video\" width=\"100%\" autoplay loop><source src=\"video/southern rift video.mp4\" type=\"video/mp4\"><img src=\"images/picture2.png\" id=\"cover\"></video>";
	var mobileContent = "<img src=\"images/picture2.png\" id=\"cover\">";
	if(screen.width < 800){
		$('#contact-links').css('top', screen.height);
		$('#main-page-content').html(mobileContent);
	}
	else{
		$('#contact-links').css('top', $('#main-page.main-page-content').bottom + 10);
		$('#main-page-content').html(desktopContent);
	}

	//animations.
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
