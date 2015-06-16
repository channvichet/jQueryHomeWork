$(document).ready(function() {
	function imgAnimation(selector) {
		$(selector).animate({
			width : "50%",
		}, 3000, function() {
			$(selector).animate({
				left : "+=100%"
			}, 3000, function() {
				$(selector).hide();
			});
		});
	}
	;
	var imgLenght = $("div").children().length;

	for (var i = 0; i < imgLenght; i++) {

		imgAnimation();

		// alert(i);
	}
});