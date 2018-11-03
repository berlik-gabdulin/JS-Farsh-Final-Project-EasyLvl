function modal() {
    // Модальное окно

	class Modal {
		constructor(modalOpenBtn, modalClsBtn, modalWrp) {
			this.modalOpenBtn = modalOpenBtn;
			this.modalClsBtn = modalClsBtn;
			this.modalWrp = modalWrp;
		}
		open() {
			for (let i = 0; i < modalOpenBtn.length; i++) {
				modalWrp.style.cssText = 'display: block';
			}
		}
		close() {
			modalWrp.style.cssText = 'display: none';
		}
	}

    let modalOpenBtn = 'description-btn',
        modalMoreBtn = 'more',
		modalWrp = document.querySelector('.overlay'),
		modalClsBtn = document.querySelector('.popup-close');

    let newModal = new Modal(modalOpenBtn, modalClsBtn, modalWrp);
        moreModal = new Modal(modalMoreBtn, modalClsBtn, modalWrp);
	
    function modalOpen(modal, openBtn) {
        document.querySelector('body').addEventListener('click', function () {
            let target = event.target;
            if (target && target.classList.contains(openBtn)) {
                modal.open();
            } else if (target == modalClsBtn) {
                modal.close();
            }
        });
    }
    modalOpen(newModal, modalOpenBtn);
    modalOpen(moreModal, modalMoreBtn);
}

module.exports = modal;