$(document).ready(function(){
	if ($.browser.mozilla) {
		$('input.button').css('padding', '0 0 7px');
	}
	var userAgent = navigator.userAgent.toString().toLowerCase();
	if ((userAgent.indexOf('safari') != -1) && !(userAgent.indexOf('chrome') != -1)) {
		$('.slogan .slogan-italic').css('font-weight', 'normal');
	}

	// Text in the input 
	$('.click-text-save').live('click', function() {
		if($(this).val() == $(this).attr('title')) {
			$(this).val('');
		} 
	}).live('blur', function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));
		}		
	});
	
	// portfolio slider number page
	var pages_total = Math.ceil($('.portfolio-slider-inner1').children().length / 3);
	$('.pages-total').text(pages_total);
	$('.jcarousel-prev-disabled').live('click', function() {
		if(!$(this).hasClass('jcarousel-prev')) return;
		var prev = parseInt($('.pages-current').text()) - 1;
		$('.pages-current').text(prev);
	});
	$('.jcarousel-next-disabled').live('click', function() {
		if(!$(this).hasClass('jcarousel-next')) return;
		var next = parseInt($('.pages-current').text()) + 1;
		$('.pages-current').text(next);
	});	
	
	// featured slider number page
	var pages_total = Math.ceil($('.featured-slider-inner').children().children().length / 3);
	$('.pages-total-f').text(pages_total);
	$('.featured-slide-prev').live('click', function() {
		if(!$(this).hasClass('featured-slide-prev-act')) return;
		var prev = parseInt($('.pages-current').text()) - 1;
		$('.pages-current').text(prev);
	});
	$('.featured-slide-next').live('click', function() {
		if(!$(this).hasClass('featured-slide-next-act')) return;
		var next = parseInt($('.pages-current').text()) + 1;
		$('.pages-current').text(next);
	});	
	
	// upload file
	window.uploadfile = function() {
		document.getElementById('input-fake').value = this.value.replace(/.*?[\/\\]([^\/\\]+)$/, '$1');
	};	
	
	// top menu
	$('.top-sub-menu li a').each(function(i, el) {
		if($(el).next('ul').length != 0) {
			$(el).append('<span class="icons menu-arrow-right">&nbsp;</span>');
		}
	});
	
	// show advanced options
	$('.show-advanced-options').live('click', function() {
		var icon = $(this).find('span.icons');
		if(icon.hasClass('orange-arrow-bottom')) {
			icon.removeClass('orange-arrow-bottom').addClass('orange-arrow-right-small');
		} else if(icon.hasClass('orange-arrow-right-small')) {
			icon.removeClass('orange-arrow-right-small').addClass('orange-arrow-bottom');
		}
		$('.advanced-options-content').toggle();
	});
});

