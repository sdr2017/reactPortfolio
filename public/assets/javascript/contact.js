$(document).ready(function() {
	$("#submit").on("click", function() {
		if ($("#email").val()==="" || $("#subject").val()==="" || $("#message").val()==="        ") {
			$("#errorMessage").html("Please fill out all fields");
		};

		if($("#email").val()===""){
			$("#email").css('border', 'solid 1px red');
		};

		if($("#subject").val()===""){
			$("#subject").css('border', 'solid 1px red');
		};

		if($("#message").val()==="    "){
			$("#message").css('border', 'solid 1px red');
		};
		console.log("errors");
		console.log($("#email").val());
		console.log($("#subject").val());
		console.log($("#message").val());
	});
});