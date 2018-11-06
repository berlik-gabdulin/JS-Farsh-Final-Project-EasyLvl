function modal(openBtn, modalWrapper, close) {
    let modalBtn = document.querySelector(openBtn),
    	modalTarget = document.querySelector(modalWrapper),
    	closeBtn = document.querySelector(close);

    modalBtn.addEventListener('click', function(event) {
    	console.log("Horay!!!");
    	let target = event.target;
    	if (target) {
    		modalTarget.classList.add('show');
    	};
    })
    closeBtn.addEventListener('click', function(event) {
    	let target = event.target;
    	if (target || target.children) {
    		modalTarget.classList.remove('show');
    	};
    })
}

module.exports = modal;