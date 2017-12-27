$(function() {
	
	var $element = $(".prizes__item");
	if( !$element.length ) return;

	var choose_button = $(".prizes__item-left", $element )
		.click(function(){
			$(".prizes__item-left").removeClass("prizes__item_chosen"),
			$(this).toggleClass("prizes__item_chosen");

		});
});


/*$(document).ready(function() {
 
  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 768) {
       $(".sidebar").removeClass("sidebar_opened");
    }
  });
});*/