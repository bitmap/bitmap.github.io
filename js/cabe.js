$(document).ready(function() {
	$("#studio > article").click(function() {
		$(this).toggleClass("hero");
		$(this).siblings("article").toggle();
		return false;
	});
	$("nav a").click(function (e) {
		$("#portfolio-wrapper").addClass("in-focus");
		$("header").addClass("in-background");
	});
	$("#back").click(function () {
		$('#portfolio-wrapper').removeClass("in-focus");
		$("header").removeClass("in-background");
	});
});

