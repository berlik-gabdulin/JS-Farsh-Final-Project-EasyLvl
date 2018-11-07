function tabs(tabItem, tabWrap, content, activeClass) {
	let tab = document.querySelectorAll(tabItem),
		info = document.querySelector(tabWrap),
		tabContent = document.querySelectorAll(content);

	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove(activeClass);
		}
	};
	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
			tab[b].classList.add(activeClass);
        }
	};

	info.addEventListener('click', function (event) {
		event.preventDefault();
		let target = event.target;
		if (target || target.children) {
			for (let i = 0; i < tab.length; i++) {
				tab[i].classList.remove(activeClass);
				if (target == tab[i] || target == tab[i].children[0]) {
					// console.log('Tab link ' + i);
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
};

module.exports = tabs;