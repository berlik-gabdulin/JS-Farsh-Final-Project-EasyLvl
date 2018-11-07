function form(formClass, customData = '') {
	// Form
	let message = {
		loading: "Загрузка...",
		success: "Спасибо! Скоро мы с Вами свяжемся!",
		failure: "Что-то пошло не так..."
	},
	form = document.querySelectorAll(formClass),
	input = document.getElementsByTagName('input');


	function getNumber(elem) {
		for (let i = 0; i < elem.length; i++) {
			if (elem[i].getAttribute('name') == 'user_phone') {
				let phone = elem[i];
				phone.addEventListener('input', (event) => {
					let num = parseInt(phone.value.replace(/\D/g, ""));
					if (isNaN(num)) {
						event.preventDefault();
						phone.value = '';
						num = '';
					} else {
						phone.value = "+" + num;
					}
				});
			}
		}
	}

	function sendForm(form) {
		for (let i = 0; i < form.length; i++) {

			let elem = form[i],
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			elem.addEventListener('submit', function (event) {
				event.preventDefault();
				elem.appendChild(statusMessage);

				let formData = new FormData(elem);

				function postData(data) {
					return new Promise(function (resolve, reject) {
						let request = new XMLHttpRequest();

						request.open('POST', '/server.php');
						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

						request.onreadystatechange = function () {
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4) {
								if (request.status == 200) {
									resolve()
								} else {
									reject()
								}
							}
						}
						console.log(data);
						request.send(data);
					})
				}

				function clearForm() {
					setTimeout(function () {
						for (let i = 0; i < input.length; i++) {
							input[i].value = '';
						}
						statusMessage.innerHTML = '';
						document.querySelector('.modal_active').classList.remove('show');
					}, 3000);
				}

				postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => setTimeout(function() {
					statusMessage.innerHTML = message.success;
				}, 2000))
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearForm());
			});
		}
	}

	getNumber(input);
	sendForm(form);
};

module.exports = form;