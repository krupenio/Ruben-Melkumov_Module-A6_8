
let currentProgress = 0

$(".btn1").click(function() {
	currentProgress = currentProgress + 1;
	$(".progress-bar").attr("style", "width: " + currentProgress + "%");
});

$('.btn2').click(function() {
	currentProgress = currentProgress + 3;
	$('.progress-bar').attr("style", "width: " + currentProgress + "%");
});

$('.btn3').click(function() {
	currentProgress = currentProgress + 7;
	$('.progress-bar').attr("style", "width: " + currentProgress + "%");
});

$(document).ready(init);




