$(function() {
	var $navbar = $('.top');
	console.log($navbar);











    
});



window.addEventListener('scroll', function(){
		var top=this.scrollY;
		// console.log(top);
		if(top>0) {
			
			$('nav').addClass('scrolled');
			$('.nav').css('border-bottom', 'none');			
		}
		if (top==0) {
			$('nav').removeClass('scrolled');
			$('.nav').css('border-bottom', '1px solid rgba(255,255,255, 0.15)');
		}	

		var first = document.getElementsByClassName('first')[0].getBoundingClientRect();
		
		if ((first.top<100)&&(first.bottom>100)) {
			document.getElementById('features').style.color = "#fff"			
		} else {
			document.getElementById('features').style.color = "grey"
		}
		var gridholder = document.getElementsByClassName('gridholder')[0].getBoundingClientRect();
		if ((gridholder.top<100)&&(gridholder.bottom>100)) {			
			document.getElementById('works').style.color = "#fff"
		} else {
			document.getElementById('works').style.color = "grey"
		}

		var third = document.getElementsByClassName('third')[0].getBoundingClientRect();
		if ((third.top<100)&&(third.bottom>100)) {			
			document.getElementById('ourteam').style.color = "#fff"
		} else {
			document.getElementById('ourteam').style.color = "grey"
		}

		var four = document.getElementsByClassName('four')[0].getBoundingClientRect();
		if ((four.top<100)&&(four.bottom>100)) {			
			document.getElementById('testimonials').style.color = "#fff"
		} else {
			document.getElementById('testimonials').style.color = "grey"
		}

		var fifth = document.getElementsByClassName('fifth')[0].getBoundingClientRect();
		if ((fifth.top<100)&&(fifth.bottom>100)) {			
			document.getElementById('download').style.color = "#fff"
		} else {
			document.getElementById('download').style.color = "grey"
		}
		
			
	});

