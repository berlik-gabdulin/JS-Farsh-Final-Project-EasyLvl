window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	let tabs = require('./_tabs'),
		timer = require('./_timer'),
		modal = require('./_modal'),
		form = require('./_form'),
		calc = require('./_calc'),
		imgModal = require('./_imgModal');

	tabs('.glazing_block a', '.glazing_slider', '.glazing .row', 'active');
	tabs('.decoration_item > div', '.decoration_slider', '.decoration_content > .row > div', 'after_click');
	tabs('.balcon_icons a', '.balcon_icons', '.big_img img', 'active');
	timer("2019-07-04T18:00:00");
	modal('phone_link', 'popup', 'popup_form', 'popup_close', 60000);
	// modal('popup_calc_btn', 'popup_calc', 'popup_calc_content', '', '');
	modal('popup_engineer_btn', 'popup_engineer', 'popup_content', 'popup_close', '');
	form('.form');
	calc();
	imgModal();
	
});