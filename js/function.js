(function($) {
	$(function() {
		$(document).ready(function() {
			$("#owl-lessons").owlCarousel({
				navigation : true, 
				pagination: false,
				mouseDrag: false,
				navigationText : ['', ''],
				items : 4
			});
		});
	});
})(jQuery);