window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	let tabs = require('./_tabs'),
		timer = require('./_timer'),
		modal = require('./_modal');
		// form = require('./_form'),
		// slider = require('./_slider'),
		// calc = require('./_calc');

	tabs('.glazing_block a', '.glazing_slider', '.glazing .row', 'active');
	tabs('.decoration_item > div', '.decoration_slider', '.decoration_content > .row > div', 'after_click');
	tabs('.balcon_icons a', '.balcon_icons', '.big_img img', 'active');
	timer("2019-07-04T18:00:00");
	modal('.phone_link', '.popup', '.popup_close');
	// form();
	// slider();
	// calc();
	
});