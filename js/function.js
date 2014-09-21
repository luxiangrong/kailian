(function($) {
	$(function() {
		$(document).ready(function() {
			$("#owl-lessons").owlCarousel({
				navigation : true, 
				pagination: false,
				mouseDrag: false,
				navigationText : ['', ''],
				items : 4,
				responsive: false
			});
			
			$("#banner-slider").bxSlider({
				pagerCustom: '#bx-pager',
				controls: false
			});
		});
	});
})(jQuery);