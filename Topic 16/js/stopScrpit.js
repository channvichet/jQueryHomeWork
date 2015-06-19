$(document).ready(function() {
	var interval;
	var displayAnimate;
	$(function() {
		$('#animation').each(function(i) {
			$("img").hide();

			// scope everything for each slideshow $("img").hide(); var $this =
			var $this = this;
			$('> :gt(0)').hide();
			displayAnimate = function() {
				$('> :first-child', $this).fadeOut(3000).next().fadeIn(3000).end().appendTo($this);
			};

			timer = setInterval(displayAnimate, 3000);
			$("#animation").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(displayAnimate, 3000);
			});
			
		});

	});
});