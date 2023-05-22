$(document).ready(function(){
	
	$(".action").click(function(e) {
		e.preventDefault();

	$(".slide").removeClass("active");
	let slide = $(this).closest(".slide");
	slide.addClass("active");
	})
})


