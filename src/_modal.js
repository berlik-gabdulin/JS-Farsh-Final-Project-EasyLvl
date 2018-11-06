function modal(openBtn, modalWrapper, formWrapper, close, timer) {
	let modalBtn = document.getElementsByClassName(openBtn),
	modalTarget = document.getElementsByClassName(modalWrapper)[0],
	form = modalTarget.getElementsByClassName(formWrapper)[0],
	closeBtn = modalTarget.getElementsByClassName(close)[0],
	body = document.getElementsByTagName('body')[0];

	for (let i = 0; i < modalBtn.length; i++) {
		modalBtn[i].addEventListener('click', function(event) {
			event.preventDefault();
			let target = event.target;
			if (target) {
				modalTarget.classList.add('show');
				body.classList.add('modal_opened');
			};			
		})
	}

	modalTarget.addEventListener('click', function(event) {
		event.preventDefault();
		let target = event.target;

		for (let i = 0; i < target.children.length; i++) {
			if (target == modalTarget && target != form.children[i]) {
				modalTarget.classList.remove('show');
			}
		}

		if (close !== '') {
			for (let i = 0; i < closeBtn.children.length; i++) {
				if (target == closeBtn.children[i]) {
					modalTarget.classList.remove('show');
				}
			}
		}
	})

	function autoOpen() {
		if (timer > 0) {
			setTimeout(function() {
				if (!body.classList.contains('modal_opened')) {
					modalTarget.classList.add('show');
					body.classList.add('modal_opened');
				}
			}, timer);
		} 
	};
	autoOpen();


}

module.exports = modal;