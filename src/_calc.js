function calc() {
	let width = document.getElementById('width'),
	height = document.getElementById('height'),
	area = 0,
	calcOpen = document.getElementsByClassName('popup_calc_btn'),
	calcClose = document.querySelector('.popup_calc_close'),
	calcProfileClose = document.querySelector('.popup_calc_profile_close'),
	calcEndClose = document.querySelector('.popup_calc_end_close'),
	modal1 = document.querySelector('.popup_calc'),
	modal1Sub = document.querySelector('.popup_calc_button'),
	modal2 = document.querySelector('.popup_calc_profile'),
	modal2Sub = document.querySelector('.popup_calc_profile_button'),
	modal3 = document.querySelector('.popup_calc_end'),
	typeWrp = document.querySelector('.balcon_icons'),
	viewType = document.getElementById('view_type'),
	checkboxWarm = document.querySelectorAll('.checkbox')[0],
	checkboxCold = document.querySelectorAll('.checkbox')[1],
	dataObj = {},
	alert = document.createElement('span'),
	body = document.getElementsByTagName('body')[0],
	form = require('./_form');
	alert.classList.add('message');
	alert.style.cssText = "display:none; padding: 5px 0";

	function getCount(elem) {
		for (let i = 0; i < elem.length; i++) {
			if (elem[i].type == 'text') {
				let count = elem[i];
				count.addEventListener('input', (event) => {
					let num = parseInt(count.value.replace(/\D/g, ""));
					if (isNaN(num)) {
						event.preventDefault();
						count.value = '';
						num = '';
					} else {
						count.value = num;
					}
				});
			}
		}
	};

	function openModal(elem) {
		modalToClose = document.querySelector('.popup_active');
		if (modalToClose !== null && modalToClose !== 'undefined') {
			document.querySelector('.popup_active').classList.remove('show');
			document.querySelector('.popup_active').classList.remove('popup_active');
		};
		elem.getElementsByClassName('text-center')[0].appendChild(alert);
		elem.classList.add('show');
		elem.classList.add('popup_active');
		body.classList.add('modal_opened');
	}

	function calcModalClose(elem) {
		elem.addEventListener('click', function() {
			document.querySelector('.popup_active').classList.remove('show');
			document.querySelector('.popup_active').classList.remove('popup_active');
			dataObj = {};
		});
	}
	calcModalClose(calcClose);
	calcModalClose(calcProfileClose);
	calcModalClose(calcEndClose);

	typeWrp.addEventListener('click', function(event) {
		let target = event.target;
		if (target || target.tagName == 'a') {
			dataObj.typeNumber = target.className;
		}
	})

	viewType.addEventListener('change', function () {
		dataObj.windowType = this.options[this.selectedIndex].value;
	});    

	checkboxWarm.addEventListener('change', function() {
		if (this.checked == true) {
			checkboxCold.checked = false;
			dataObj.profileType = 'Warm';
		}
	})
	checkboxCold.addEventListener('change', function() {
		if (this.checked == true) {
			checkboxWarm.checked = false;
			dataObj.profileType = 'Cold';
		}
	})

	modal1Sub.addEventListener('click', function() {
		if (width.value == '' || height.value == '' || width.value == '0' || height.value == '0') {
			alert.innerHTML = "Укажите размеры!";
			alert.classList.add('show');
		} else if (dataObj.typeNumber == null) {
			alert.innerHTML = "Выберите тип балкона!";
			alert.classList.add('show');
		} else {
			dataObj.width = width.value;
			dataObj.height = height.value;
			openModal(modal2);
			alert.classList.remove('show');
		}
	});
	modal2Sub.addEventListener('click', function() {
		if (viewType.value == '') {
			alert.innerHTML = "Выберите тип остекления!";
			alert.classList.add('show');
		} else if (checkboxCold.checked == false && checkboxWarm.checked == false) {
			alert.innerHTML = "Выберите тип профиля!";
			alert.classList.add('show');
		} else {
			dataObj.windowType = viewType.value;
			openModal(modal3);
			alert.classList.remove('show');
		}
	})

	for (let i = 0; i < calcOpen.length; i++) {
		calcOpen[i].addEventListener('click', function() {
			openModal(modal1);
		});
	}
	getCount(document.querySelectorAll('.popup_calc_content .form-control'));
	form('.popup_calc_end .form', dataObj);
};

module.exports = calc;