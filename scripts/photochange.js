$(document).ready(function(){
	$('#professional').click(function(){
		$('.current').fadeOut(200);
		$('.current').removeClass("current");
		$('.active').removeClass("active");
		$('#professionaltable').addClass("current");
		$('#professional').addClass("active");
		$('.current').fadeIn(200);
	});
	$('#social').click(function(){
		$('.current').fadeOut(200);
		$('.current').removeClass("current");
		$('.active').removeClass("active");
		$('#socialtable').addClass("current");
		$('#social').addClass("active");
		$('.current').fadeIn(200);
	});
	$('#formal').click(function(){
		$('.current').fadeOut(200);
		$('.current').removeClass("current");
		$('.active').removeClass("active");
		$('#formaltable').addClass("current");
		$('#formal').addClass("active");
		$('.current').fadeIn(200);
	});
});