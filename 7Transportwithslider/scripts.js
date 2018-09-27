
$(document).ready(function(){	

				
	
	window.addEventListener('scroll', function(){
		var top=this.scrollY;
		// console.log(top);
		if(top>0) {
			// $('.toprow').css('color', 'green');
			$('.toprow').addClass('scrolled');
		}

		if (top==0) {
			$('.toprow').removeClass('scrolled');
		}

		// var navBottom= $('.row_intro')[0].getBoundingClientRect().bottom;		
		// // console.log(navBottom);
		// $('.second').css('margin-top',top+navBottom);
			
	});

	

	$('#panel1_nav').mouseenter(function(){
		$('.panel1').removeClass('dn');
	});
	$('#panel1_nav').mouseleave(function(){
		$('.panel1').addClass('dn');
	});

	$('#panel2_nav').mouseenter(function(){
		$('.panel2').removeClass('dn');
	});
	$('#panel2_nav').mouseleave(function(){
		$('.panel2').addClass('dn');
	});

	$('#panel3_nav').mouseenter(function(){
		$('.panel3').removeClass('dn');
	});
	$('#panel3_nav').mouseleave(function(){
		$('.panel3').addClass('dn');
	});

	$('#panel4_nav').mouseenter(function(){
		$('.panel4').removeClass('dn');
	});
	$('#panel4_nav').mouseleave(function(){
		$('.panel4').addClass('dn');
	});
	

	$('.burger').click(function(){
		$('.slideMenu').toggleClass('on');
	});


	function autoMove (){
		
		if ($('.slider').hasClass('on')){

			// var myVar=setInterval(function(){moveLeft() }, 3000);
			
			setTimeout(function(){
				moveLeft();
			}, 2000);
			
			setTimeout(function() {
				autoMove();		 		
  			}, 2000);	
  				
		}


		
	};

	function moveLeft (){	
			var array = $('.slider li');
			if (array[0].getBoundingClientRect().left<-2000) {
				$('.slider').append(array[0]);
				// console.log($('.slider'));
				array.animate({left:'+=490'},0);
			}
			array.animate({left:'-=490'},1000);			
									
	};

	function moveRight (){
			var array = $('.slider li');
			if ((array[array.length-1]).getBoundingClientRect().right>4000) {
				$('.slider').prepend(array[array.length-1]);
				array.animate({left:'-=490'},0);
			}	
			array.animate({left:'+=490'},1000);
	};

	$('.l.Arr').click(function(){
			moveLeft();
	});

	$('.r.Arr').click(function(){
			moveRight();
	});


	$ ('.slSection').mouseenter(function(){
		$('.slider').removeClass('on');
		
	}); 
		

	$ ('.slSection').mouseleave(function(){
		$('.slider').addClass('on');
		autoMove();

	}); 
		
	




	



	
		
		
				

		

		






});

