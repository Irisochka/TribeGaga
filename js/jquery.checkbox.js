/**
 * checkbox jquery plugin
 * @author sap1ens - http://sap1ens.ru
 */
(function($) {
	
	$.fn.checkbox = function(options) {
		if(!options) options = {};
		
		$(this).each(function(i, el) {
		
			var orig = $(el);
			
			var wrapper = $('<div class="checkbox_wrapper"><div class="checkbox_fake"></div><div class="checkbox_orig"></div></div>');
			orig.after(wrapper);
			
			orig.appendTo(wrapper.find('.checkbox_orig'));
			
			if(wrapper.find('input[type=checkbox]').is(':checked')) {
				wrapper.find('.checkbox_fake').addClass('checkbox_yes');
			} else {
				wrapper.find('.checkbox_fake').addClass('checkbox_no');
			}
			
			if(options.callback != undefined) options.callback.call(wrapper.find('.checkbox_fake'));
	
			wrapper.find('.checkbox_fake').click(function() {
				if($(this).hasClass('checkbox_yes')) {
					$(this).removeClass('checkbox_yes').addClass('checkbox_no');
					var orig = $(this).next().children();
					if($.prop !== undefined) {
						orig.prop('checked', false); // 1.6+
					} else {
						orig.removeAttr('checked');
					}
				} else if($(this).hasClass('checkbox_no')) {
					$(this).removeClass('checkbox_no').addClass('checkbox_yes');
					var orig = $(this).next().children();
					if($.prop !== undefined) {
						orig.prop('checked', true); // 1.6+
					} else {
						orig.attr('checked', 'checked');
					}			
				}
				
				if(options.callback != undefined) options.callback.call($(this));
			});
		
		});
	};
	
})(jQuery);