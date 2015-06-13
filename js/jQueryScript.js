$(document).ready(function() {
	$("#btn").click(function(){
		$("#content").toggle();
		if($("#btn").val() == "Hide"){
			$("#btn").attr("value", "Show");
		}else{
			$("#btn").attr("value", "Hide");
		}
	});
	
});