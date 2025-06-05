$(window).load(function(){

// change copyright year
	$('#copyright span').html(new Date().getFullYear());

// video functionality
	$('.video-thumb img').live('click', function(){
		$('#nav-overlay').fadeIn(300, function(){
			$('#overlay-close img').fadeIn(200);
			$('#overlay-content').css({
				textAlign: 'center'
			}).load('video-link.html', function(){
				$('#overlay-content').fadeIn(400);
			});
		});
	});
	
// categories functionality
	$('.load-data').live('click', function(){
		if($(window).width() < 800)
		{
			var loadCD = "categoryData.html " + $(this).attr('href');
			$('#nav-overlay').fadeIn(300, function(){
				$('#overlay-close img').fadeIn(200);
				$('#overlay-content').css({
					textAlign: 'left'
				}).load(loadCD, function(){
					$('#overlay-content').fadeIn(400);
				});
			});
			return false;
		}
		else
		{
			var loadCD = "categoryData.html " + $(this).attr('href') + " .cat-data-description";
			var xPos = $(this).position().left + 8;
			var yPos = $(this).position().top + $(this).height();
			$('#class-category-description').fadeOut(200, function(){
				$(this).css({
					position: 'absolute',
					top: yPos,
					left: xPos
				});
				$('#ccd-content').load(loadCD, function(){
					$('#class-category-description').fadeIn(200);
				})
			});
			$(document).live('click', function(){
				$('#class-category-description').fadeOut(200);
			});
			return false;
		}
	});
	
// cross functionality
	function crossFunction(){
		$('#overlay-content').fadeOut(200).hide();
		$('#overlay-close img').fadeOut(200);
		$('#nav-overlay').fadeOut(200);
		$('.video-container').remove();
	}
	
	$(window).keydown(function(e){
	// escape = 27
		if(e.keyCode == 27)
		{
			crossFunction();
			$('#class-category-description').fadeOut(200);
		};
	});
	
	$('#overlay-close img').live('click', function(){
		crossFunction();
	});
	
// mobile navigation functionality
	var x = 0;
	$('#nav-toggle').live('click', function(){
		if(x == 0)
		{
			$('#nav-wrapper').animate({
				bottom: '0px'
			}, 200);
			x = 1;
		}
		else
		{
			$('#nav-wrapper').animate({
				bottom: '-280px'
			}, 200);
			x = 0;
		}
	});
	
	$('#logo-wrapper').live('click', function(){
		return false;
	});

	$(window).scroll(function(){
	
	// body scrolls top logo background shifts up
		if($(window).scrollTop() > 100)
		{
			$('#nav-toggle').stop().animate({top: '10px'}, 200);
			$('#header').stop().animate({
				height: '50px'
			}, 200);
			$('#logo-wrapper').stop().animate({
				height: '45px',
				top: '4px',
				backgroundPositionY: '0px'
			}, 200, function(){
				$(this).css({backgroundPosition: '50% 0'});
			});
		}
		else
		{
			$('#nav-toggle').stop().animate({top: '120px'}, 200);
			$('#header').stop().animate({
				height: '110px'
			}, 200);
			$('#logo-wrapper').stop().animate({
				backgroundPositionY: '-81px',
				top: '10px',
				height: '90px'
			}, 200, function(){
				$(this).css({backgroundPosition: '50% -81px'});
			});
		}
	});
	
//form script
	
function isValidEmailAddress(emailAddress) {

var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

return pattern.test(emailAddress);

};
	
	$('#submit').live('click', function(){
		$("#pre-loader").fadeIn(200);
		
		$(document).live('click', function(){
			$('.form-li label').css({color: 'rgba(249,249,249,1)'});
			$('#submit').attr('value', 'Send');
		});
		
		var name = $('input#name').val();
		if (name == '')
		{
			$('.form-li:nth-child(1) label').css({color: '#ff6600'});
			$('input#name').focus();
			$("#pre-loader").fadeOut(200);
			return false;			
		}
		else
		{
			$('.form-li:nth-child(1) label').css({color: 'rgba(249,249,249,1)'});
		}
		
		var email = $('input#email').val();
		if (    (email == '') || (!isValidEmailAddress(email))    )
		{
			$('.form-li:nth-child(2) label').css({color: '#ff6600'});
			$('input#email').focus();
			$("#pre-loader").fadeOut(200);
			return false;
		}
		else
		{
			$('.form-li:nth-child(2) label').css({color: 'rgba(249,249,249,1)'});
		}
		
		var phone = $('input#phone').val();
		if (phone == '')
		{
			$('.form-li:nth-child(3) label').css({color: '#ff6600'});
			$('input#phone').focus();
			$("#pre-loader").fadeOut(200);
			return false;
		}
		else
		{
			$('.form-li:nth-child(3) label').css({color: 'rgba(249,249,249,1)'});
		}
		
		var textarea = $('textarea#comments').val();
		if (textarea == '')
		{
			$('.form-li:nth-child(4) label').css({color: '#ff6600'});
			$('input#comments').focus();
			$("#pre-loader").fadeOut(200);
			return false;
		}
		else
		{
			$('.form-li:nth-child(4) label').css({color: 'rgba(249,249,249,1)'});
		}
		
		var dataString = 'name='+name+'&email='+email+'&phone='+phone+'&comments='+textarea;
		//alert (dataString);return false;
		$.ajax({
			type: "POST",
			url: "form.php",
			data: dataString,
			success: function()
			{
				if ($(window).width() > 860)
				{
					$("input, textarea").val("");
					$("#pre-loader").fadeOut(200);
					$('#submit').attr('value', 'Message sent');
					$('#email-confirm').fadeIn(200).delay(4000).fadeOut(200);
					$('#success-message').fadeIn(200).delay(4000).fadeOut(200);
				}
				else
				{
					alert ('Your message has been delivered to us. We will get back to you soon. Thanks for dropping by.');
				}
			},
			error: function()
			{
				if ($(window).width() > 860)
				{
					$("#pre-loader").fadeOut(200);
					$('#submit').show();
					$('#email-confirm').fadeIn(200).delay(4000).fadeOut(200);
					$('#error-message').fadeIn(200).delay(4000).fadeOut(200);
				}
				else
				{
					alert ('There was an unexpected error. Please try again.');
				}
			}
		})
		return false;
	
	});
	
//form script ends here

// navigation functionality
	
	function cycleImages(){
		$('#home-pic').cycle({
			fx: 'scrollLeft',
			timeout: 3000,
			speed: 800,
			easing: 'easeInOutBack'
		});
	}
	
	function lightBox(){
		$('.lightbox-gallery').each(function(){
			$(this).css({
				background: 'url(' + $(this).attr('href').replace('/gallery/','/gallery/tn/') + ') center center no-repeat',
				backgroundSize: 'cover'
			});
		});
	}
	
	lightBox();
	cycleImages();
	
	$('.menu-li').live('click', function(){
		if($(window).width() < 901)
		{
			$('#nav-wrapper').animate({
				bottom: '-280px'
			}, 200);
			x = 0;
		}
		
		var link = $(this).data('link');
		$('#land').fadeIn(500, function(){
			$('#content-wrapper').load(link + ' .section-wrapper', function(){
				$(window).scrollTo(0, 1000);
				$('.section-wrapper').css({
						backgroundPositionY: '-150px'
					});
				$('#land').delay(500).fadeOut(500, function(){
					$('.section-wrapper').delay(500).animate({
						backgroundPositionY: '-15px'
					});
					cycleImages();
					lightBox();
				});
			});
		})
	});
	
// social name appearance
	$('.social-icons').mouseover(function(){
		$(this).next('.social-name').stop().animate({
			marginTop: '-10px',
			opacity: '1'
		}, 200);
	});
	
	$('.social-icons').mouseout(function(){
		$(this).next('.social-name').stop().animate({
			marginTop: '-15px',
			opacity: '0'
		}, 200);
	});

// hide landing page
	$('#land').fadeOut(500, function(){
		$('.section-wrapper').animate({
			backgroundPositionY: '-15px'
		});
	});
	$(window).scrollTo(0, 1000);
	
});