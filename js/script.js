(function ($, root, undefined) {

	$(function () {

		'use strict';

		// replace svg with png on old ie
		if($("html").hasClass("oldie")) {
			$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
			});
		}

		$('.footer-action').on('click', function(event) {
			event.preventDefault();
			$('.nav-footer').toggleClass('show-me');
		});

	});

})(jQuery, this);