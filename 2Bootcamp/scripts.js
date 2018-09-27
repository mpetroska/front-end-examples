var anim2 = document.getElementById('anim2');

var anim3 = document.getElementById('anim3');

var dotPulse =document.getElementsByClassName('dot_pulse');

var menuHide = document.getElementById('TopNav');
	var before=0;
var srcMiddle = window.outerHeight/2;

window.addEventListener('scroll', function(){
	var top=this.scrollY;
	// console.log(top);
	if (top>before) {
		//scroll down
		menuHide.setAttribute ('class','hide');
	} else {
		//sroll up
		menuHide.setAttribute ('class','show');
	}
	before=top;
	
	if (anim2.getBoundingClientRect().y<srcMiddle) {			
			for (var i=0; i<anim2.children.length; i++ ) {
				if (i%2==0) {
					anim2.children[i].setAttribute ('class', 'slit-in-vertical');
				} else {
					anim2.children[i].setAttribute ('class', 'slit-in-vertical2');
				}			
			}		
		}
		
	if (anim3.getBoundingClientRect().y<srcMiddle) {
		anim3.setAttribute ('class', 'tracking-in-contract-bck');
	}
	if (anim3.getBoundingClientRect().y>srcMiddle) {
		anim3.removeAttribute ('class');
	}
		
	for (var i=0; i<dotPulse.length; i++ ) {
		if (dotPulse[i].getBoundingClientRect().y<srcMiddle-50) {
		dotPulse[i].className += " scale-up-center";}
		if (dotPulse[i].getBoundingClientRect().y>srcMiddle-50) {
		dotPulse[i].className="dot_pulse";}
	
}
	

	
});
	

var burger = document.getElementsByClassName('burger');
var navUl = document.getElementById('navUl');

burger[0].addEventListener('click', function(){
	if (!navUl.hasAttribute('num')) {
		navUl.setAttribute('num',1);		
	} 
	if (navUl.getAttribute('num')==1) {
		navUl.setAttribute('num',2);
		navUl.style.display = "flex";
	} else { 
		navUl.setAttribute('num',1);
		navUl.style.display = 'none';
	}

});


