$(document).ready(function() {
	$("#work-link").click(function (e) {
		$("#portfolio").addClass("in-focus");
		$("header").addClass("in-background");
	});
	$("#back").click(function () {
		$('#portfolio').removeClass("in-focus");
		$("header").removeClass("in-background");
	});
});

