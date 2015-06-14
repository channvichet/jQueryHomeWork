/* First Homework */
$(document).ready(function() {
	$("#btn").click(function() {
		$("#content").toggle();
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
			left : "1250px",
		}, 1100).animate({
			top : "550px",
		}, 1000).animate({
			left : "-=1230px",
		}, 1200).animate({
			top : "-=535px",
		}, 1300);
	};
	
	$(function(){
		setInterval(lightBlueRec,1000);// use to call function lightBlueRec() in each 1000 millisecond
	});
	
	/* End Function */
	
	
	/* Function for Blue Rectangle */
	function blueRec() {
		$("#blueRec").animate({
			left : "1250px",
		}, 1500).animate({
			top : "550px",
		}, 1400).animate({
			left : "-=1230px",
		}, 1300).animate({
			top : "-=535px",
		}, 1200);
	};
	
	$(function(){
		setInterval(blueRec,1100);// use to call function blueRec() in each 1000 millisecond
	});
	/* End Function */
	
	
	/* Function for Magenta Rectangle */
	 function magentaRec(){
		$("#magentaRec").animate({
			left : "+=900px",
		}, 1300).animate({
			top : "+=250px",
		}, 1200).animate({
			left : "-=900px",
		}, 1100).animate({
			top : "-=250px",
		}, 1000);
	};
	
	$(function() {
		setInterval(magentaRec, 1200);// use to call function magentaRec() in each 1000 millisecond
	});
	/*End Function */
	
	
	/*Function for Pink Rectangle*/
	 function pinkRec(){
		$("#pinkRec").animate({
			left : "+=1110px",
		}, 1000).animate({
			top : "+=410px",
		}, 1000).animate({
			left : "-=1110px",
		}, 1000).animate({
			top : "-=410px",
		}, 1000);
	};
	$(function() {
		setInterval(pinkRec, 1300);// use to call function pinkRec() in each 1000 millisecond
	});
	/* End Function */
	
	
	/*---------------End Homework 2-------------*/
});
