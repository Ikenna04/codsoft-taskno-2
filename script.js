// VARIABLES
const navIcon = document.querySelectorAll("[alt='nav icon']"),
	dropDown = document.querySelector('.drop-down'),
	navLinks = document.querySelectorAll('.drop-down > ul>li'),
	searchBtn = document.querySelectorAll('.search-btn'),
	search = document.querySelector('.search');

// EVENT LISTENERS
navIcon.forEach(icon => {
	icon.addEventListener('click', () => {
		dropDown.classList.toggle('clicked');
	});
});

navLinks.forEach(navLink => {
	navLink.addEventListener('click', () => {
		if (navLink.classList.contains('clicked')) {
			navLink.classList.remove('clicked');
		} else {
			navLinks.forEach(navLink => {
				navLink.classList.remove('clicked');
			});
			navLink.classList.add('clicked');
		}
	});
});

searchBtn.forEach(btnSearch => {
	btnSearch.addEventListener('click', () => {
		search.classList.toggle('clicked');
	});
});
