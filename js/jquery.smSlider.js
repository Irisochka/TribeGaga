/**
 * Yet another jquery slider - smSlider
 * @author sap1ens - http://sap1ens.ru 
 */
(function($) {

 $.fn.smSlider = function(options) {
 
  var slider = $.extend({
   item_width: 310,
   per_screen: 2,
   duration: 400,
   prev_class: 'slider_prev',
   next_class: 'slider_next',
   prev_active_class: 'slider_active_prev',
   next_active_class: 'slider_active_next',
   _frozen: false
  }, options);

  var obj = $(this);
  var main_width = obj.width(); 
  var main_height = obj.height(); 
  
  var inner = obj.children();
  
  var total_items = Math.ceil(inner.children().length / 3);
  
  var inner_width = total_items * slider.item_width;
  inner.css('width', inner_width+'px');

  if(total_items > slider.per_screen) $('.'+slider.next_class).addClass(slider.next_active_class);
  
  $.browser.safari = $.browser.webkit && !window.chrome;
  if($.browser.safari) {
   inner.css('clip', 'rect(0px, '+main_width+'px, '+main_height+'px, 0px)');
  } else {
   obj.css('overflow', 'hidden');
  }
  
  /* clicks */
  
  $('.'+slider.next_class).live('click', function() {
   if(slider._frozen) return;
   
   var control = $(this);
   if(control.hasClass(slider.next_active_class)) {
    
    slider._frozen = true;
    inner.animate({
     left: '-='+slider.item_width
    }, {
     duration: slider.duration,
     easing: 'swing',
     step: function(now, fx) {
      if($.browser.safari) {
       var step = Math.abs(now);
       inner.css('clip', 'rect(0px, '+(main_width + step)+'px, '+main_height+'px, '+step+'px)');
      }
     }, 
     complete: function() {
      slider._frozen = false;
      
      $('.'+slider.prev_class).addClass(slider.prev_active_class);
      if(!(parseInt(inner.css('left').replace('px', '')) > -inner_width + slider.per_screen * slider.item_width)) {
       control.removeClass(slider.next_active_class);
      }
     }
    });
   }
  });
  
  $('.'+slider.prev_class).live('click', function() {
   if(slider._frozen) return;
   
   var control = $(this);
   if(control.hasClass(slider.prev_active_class)) {
    
    slider._frozen = true;
    inner.animate({
     left: '+='+slider.item_width
    }, { 
     duration: slider.duration,
     easing: 'swing',
     step: function(now, fx) {
      if($.browser.safari) {
       var step = Math.abs(now);
       inner.css('clip', 'rect(0px, '+(main_width + step)+'px, '+main_height+'px, '+step+'px)');
      }
     },     
     complete: function() {
      slider._frozen = false;
      
      $('.'+slider.next_class).addClass(slider.next_active_class);
      
      if(!((parseInt(inner.css('left').replace('px', '')) + slider.item_width) <= 0)) {
       control.removeClass(slider.prev_active_class);
      }
     }
    });
   } 
  });  
  
  return this;
 };

})(jQuery);