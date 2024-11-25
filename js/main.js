'use strict'
var navList = document.querySelector('.navbar__list'),
	menuButton = document.querySelector('.hamburger'),
	showMobileMenu = function () {
		navList.classList.toggle('show-menu')
	},
	removeMobileMenu = function () {
		navList.classList.remove('show-menu')
	}
menuButton.addEventListener('click', showMobileMenu), navList.addEventListener('click', removeMobileMenu)

