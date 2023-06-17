(function($){
	'use-strict';

$('.menu-icon').on('click', function(){
	$('nav ul').animate({left: 0})
});
$('nav ul .fa-solid').on('click', function(){
	$('nav ul').animate({left: -320})
});





})(jQuery);