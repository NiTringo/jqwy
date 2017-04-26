$(document).ready(function() {
	$("#bars").click(function() {
		$("#popup").fadeToggle();
	});
	
	$("#hover-me").hover(function() {
		$("#hover-me").text("hover out")
	},
	function() {
		$("#hover-me").text("Hover in");
	}
	);
});

$(document).ready(function() {
	$("#LOL").hover(function() {
		$("#pop").fadeToggle();
	});
});