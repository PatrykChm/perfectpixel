var navList = document.querySelector('.navbar__list'),
    menuButton = document.querySelector('.hamburger'),
    navItems = document.querySelectorAll('.navbar__item a'), // Pobieramy linki w menu
    lastScrollTop = 0, // Przechowujemy poprzednią pozycję scrolla
    showMobileMenu = function () {
        navList.classList.toggle('show-menu');
    },
    removeMobileMenu = function () {
        navList.classList.remove('show-menu');
    },
    hideMenuOnScroll = function () {
        // Aktualna pozycja scrolla
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Ukryj menu tylko, jeśli jest widoczne
        if (navList.classList.contains('show-menu')) {
            if (Math.abs(currentScroll - lastScrollTop) > 20) {
                // Ukrywamy menu, jeśli różnica w scrollu jest większa niż 20px
                removeMobileMenu();
            }
        }

        // Zaktualizuj pozycję scrolla
        lastScrollTop = currentScroll;
    };

// Pokazanie/ukrycie menu po kliknięciu w hamburgera
menuButton.addEventListener('click', showMobileMenu);

// Ukrycie menu po kliknięciu w dowolny link w menu
navItems.forEach(function (item) {
    item.addEventListener('click', removeMobileMenu);
});

// Ukrycie menu po scrollowaniu strony
window.addEventListener('scroll', hideMenuOnScroll);

var swiper = new Swiper('.mySwiper', {
	// autoplay: {
	// 	delay: 5500,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

var copy = document.querySelector('.logos-slide').cloneNode(true)
document.querySelector('.logos').appendChild(copy)

console.clear()

AOS.init()


