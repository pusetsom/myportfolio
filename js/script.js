// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('header').addClass('nav-show');
	} else{
		$('header').removeClass('nav-show');
	}
})

// hamburger
const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const navbar = document.querySelector(".nav-bar");
	const navLinks = document.querySelectorAll(".nav-bar li");

	hamburger.onclick = () => {
		navbar.classList.toggle("nav-active");

		// Animation links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
			}
		});

		// hamburger animation
		hamburger.classList.toggle("toggle");
	}

	// Close menu when a navigation link is clicked
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			navbar.classList.remove("nav-active");
			hamburger.classList.remove("toggle");
		});
	});
}

window.onload = () => navSlide();
