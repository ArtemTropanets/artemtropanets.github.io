document.querySelector('.menu-hamburger').addEventListener('click', function() {
	this.classList.toggle('menu-hamburger-active');
	document.querySelector('.nav__list').classList.toggle('nav__list-active');
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
  	nav: true,
  	items: 1
  });
});