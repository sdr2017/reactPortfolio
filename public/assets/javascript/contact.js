$(document).ready(function() {
	$("#submit").on("click", function() {
		if ($("#email").val()==="" || $("#subject").val()==="" || $("#message").val()==="") {
			$("#errorMessage").append("Please fill out all fields");
		}
		console.log("errors");
		console.log($("#email").val());
		console.log($("#subject").val());
		console.log($("#message").val());
	});
});