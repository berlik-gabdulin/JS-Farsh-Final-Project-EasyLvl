function tabs() {
	let tab = document.querySelectorAll('.glazing_block a'),
		info = document.querySelector('.glazing_slider'),
		tabContent = document.querySelectorAll('.glazing .row');

	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('active');
		}
	};
	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
			tab[b].classList.add('active');
        }
	};

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target) {
			for (let i = 0; i < tab.length; i++) {
				tab[i].classList.remove('active');
				if (target == tab[i]) {
					console.log('Tab link ' + i);
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
};

module.exports = tabs;