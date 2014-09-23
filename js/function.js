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
			
			$(".search-tab li").on('click', function(){
				$(".search-tab li").removeClass('active');
				$(this).addClass('active');
			});
			
			$(".cart-wrap").on('mouseenter', function() {
				$(this).find('.cart-dialog').show();
			});
			$(".cart-wrap").on('mouseleave', function() {
				$(this).find('.cart-dialog').hide();
			});
		});
	});
})(jQuery);