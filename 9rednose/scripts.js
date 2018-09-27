$(document).ready(function(){

	var $imgLeft = $('#imgLeft');
	var $imgCenter = $('#imgCenter');
	var $imgRight = $('#imgRight');
	var $redNText = $('.thInner');

	var $one=$('.one');
	var $two=$('.two');
	var $three=$('.three');
	

var waypoints = $imgLeft.waypoint({
  handler: function(direction) {
  	$imgLeft.removeClass('hidden');
    $imgLeft.addClass('slide-left');
    $imgRight.removeClass('hidden');
    $imgRight.addClass('slide-right');
    $imgCenter.removeClass('hidden');
    $imgCenter.addClass('slide-up');

   },
   offset: '50%'
})

var waypoints = $redNText.waypoint({
  handler: function(direction) {
  	$redNText.removeClass('hidden');
    $redNText.addClass('slide-in-left');
    
   },
   offset: '50%'
})
var waypoints = $one.waypoint({
  handler: function(direction) {
  	$one.removeClass('hidden');
    $one.addClass('slide-in-leftF');
    $two.removeClass('hidden');
    $two.addClass('slide-in-left-fast');
    $three.removeClass('hidden');
    $three.addClass('slide-in-left-fastest');
    
   },
   offset: '70%'
})






}); //end jquery




