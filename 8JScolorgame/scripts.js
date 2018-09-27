$(function() {
    var count=0;
    var display;
    function colorGen () {    	
    	return 'RGB('+gen255()+','+ gen255()+','+gen255()+')';     	
    };

	function gen255 (){
    	return Math.floor(Math.random() * Math.floor(255));
    }    
    	
    $('.game_cube').each(function(){
	    $(this).css ('background-color', colorGen());
	    console.log(this);    	
    });
   
    function pickRGB(){
		if ($('.game_cube').length==0) {
			$('.rgb_color').text('game over. Your score:' + count);
			return;
		}
	    var RGBnum = Math.floor(Math.random()*Math.floor($('.game_cube').length));
	    display = $('.game_cube').eq(RGBnum).css( "background-color" );	      
		$('.rgb_color').text(display);		
	}
	
	pickRGB();
	$('.game_cube').click(function(){
		if ($(this).css( "background-color")==display) {
			count++;
			alert('corect guess:)');			
		} else {
			alert('incorect. try again! from rest ' + ($('.game_cube').length-1));
		}
		$(this).remove();
		pickRGB();
	});

	$('button').click(function(){
		location.reload();
	});

	

	
    





















});