$(document).ready(function() {
	$(function() {
		$('#animation').each(function() {
			var $this = this;
			$("img").hide();
			$('> :gt(0)', $this).hide();
			setInterval(function() {
				$('> :first-child', $this).fadeIn(500).animate({
					width : "50%",
					top : "10%"
				}, 3000, function() {
					$(this).animate({
						left : "49%",
						opacity : "0.3",
					}, 3000, function() {
						$(this).animate({
							opacity : "0.1",
						}, function() {
							$(this).fadeOut(500).animate({left:  "0",width: "10%", opacity: "1"}, 2000);
						});
					});
				}).next().end().animate().appendTo($this);
			}, 6000);
		});
	});
});