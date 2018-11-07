function imgModal() {
	let modalWrp = document.createElement('div'),
	imgOpener = document.querySelectorAll('.works a'),
	body = document.querySelector('body');
	modalWrp.classList.add('img_popup'),
	modalWrp.innerHTML = '<div class="img_popup_content"><img src="" class="img_popup_img"></div>';
	body.appendChild(modalWrp);

	for (let i = 0; i < imgOpener.length; i++) {
		imgOpener[i].addEventListener('click', function(event) {
			event.preventDefault();

			let imgWrp = document.querySelector('.img_popup_img');

			let target = imgOpener[i],
				imgUrl = target.href;
			console.log(target.href);
			imgWrp.src = imgUrl;
			modalWrp.classList.add('show');
			body.classList.add('modal_opened');
		})
	}
	modalWrp.addEventListener('click', function() {
		let target = event.target;
		for (let i = 0; i < modalWrp.children.length; i++) {
			if (target == modalWrp && target != modalWrp.children[i]) {
				modalWrp.classList.remove('show');
				body.classList.remove('modal_opened');
			}
		}
	})

};

module.exports = imgModal;