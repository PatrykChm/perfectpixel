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

// Pobranie elementów
const tabHeaders = document.querySelectorAll('.tab-header');
const tabPanels = document.querySelectorAll('.tab-panel');

// Funkcja przełączania
tabHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const tabNumber = header.dataset.tab;

        // Deaktywacja wszystkich nagłówków i paneli
        tabHeaders.forEach(h => h.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Aktywacja klikniętego nagłówka i odpowiadającego panelu
        header.classList.add('active');
        document.querySelector(`.tab-panel[data-tab="${tabNumber}"]`).classList.add('active');
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar__nav');
    const logo = document.querySelector('.logo img');
    const scrollThreshold = 50;

    if (window.scrollY > scrollThreshold) {
        // Zmniejsz wysokość menu
        navbar.style.height = '70px';
        navbar.style.transition = 'height 0.3s ease';

        // Zmniejsz rozmiar logo
        logo.style.maxWidth = '150px'; // Dopasuj do swoich potrzeb
        logo.style.transition = 'max-width 0.3s ease';
    } else {
        // Przywróć domyślną wysokość menu
        navbar.style.height = '100px';

        // Przywróć domyślny rozmiar logo
        logo.style.maxWidth = '200px';
    }
});



var copy = document.querySelector('.logos-slide').cloneNode(true)
document.querySelector('.logos').appendChild(copy)

console.clear()

AOS.init()


