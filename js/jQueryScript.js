/* First Homework */
$(document).ready(function() {
	$("#btn").click(function() {
		$("#container").slideToggle(1100);
		if ($("#btn").val() == "Hide") {
			$("#btn").attr("value", "Show");
		} else {
			$("#btn").attr("value", "Hide");
		}
	});

});

/* ------- End ----- */

/* ----- Homework 2 ------- */
$(document).ready(function() {
	
	/* Function for Light Blue Rectangle */
	 function lightBlueRec() {
		$("#lightBlueRec").animate({
			left : "93%",
		}, 1100).animate({
			top : "85%",
		}, 1000).animate({
			left : "-=92%",
		}, 1200).animate({
			top : "-=83%",
		}, 1300);
	};
	
	$(function(){
		setInterval(lightBlueRec,1000);// use to call function lightBlueRec() in each 1000 millisecond
	});
	
	/* End Function */
	
	
	/* Function for Blue Rectangle */
	function blueRec() {
		$("#blueRec").animate({
			left : "93%",
		}, 1500).animate({
			top : "85%",
		}, 1400).animate({
			left : "-=92%",
		}, 1300).animate({
			top : "-=83%",
		}, 1200);
	};
	
	$(function(){
		setInterval(blueRec,1100);// use to call function blueRec() in each 1000 millisecond
	});
	/* End Function */
	
	
	/* Function for Magenta Rectangle */
	 function magentaRec(){
		$("#magentaRec").animate({
			left : "75%",
		}, 1300).animate({
			top : "67%",
		}, 1200).animate({
			left : "-=55%",
		}, 1100).animate({
			top : "-=47%",
		}, 1000);
	};
	
	$(function() {
		setInterval(magentaRec, 1200);// use to call function magentaRec() in each 1000 millisecond
	});
	/*End Function */
	
	
	/*Function for Pink Rectangle*/
	 function pinkRec(){
		$("#pinkRec").animate({
			left : "90%",
		}, 1000).animate({
			top : "80%",
		}, 1000).animate({
			left : "-=85%",
		}, 1000).animate({
			top : "-=73%",
		}, 1000);
	};
	$(function() {
		setInterval(pinkRec, 1300);// use to call function pinkRec() in each 1000 millisecond
	});
	/* End Function */
	
	
	/*---------------End Homework 2-------------*/
});
