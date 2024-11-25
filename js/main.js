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

document.addEventListener('DOMContentLoaded', () => {
	const interBubble = document.querySelector('.interactive')
	let curX = 0
	let curY = 0
	let tgX = 0
	let tgY = 0

	const move = () => {
		curX += (tgX - curX) / 20
		curY += (tgY - curY) / 20
		interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
		requestAnimationFrame(move)
	}

	window.addEventListener('mousemove', event => {
		tgX = event.clientX
		tgY = event.clientY
	})

	move()
})
