$(document).ready(function(){
	$('#changetovideos').click(function(){
		$('.current').fadeOut(200);
		$('.current').removeClass("current");
		$('.active').removeClass("active");
		$('#videoscontainer').addClass("current");
		$('#changetovideos').addClass("active");
		$('.current').fadeIn(200);
	});
	$('#changetophotos').click(function(){
		$('.current').fadeOut(200);
		$('.current').removeClass("current");
		$('.active').removeClass("active");
		$('#photoscontainer').addClass("current");
		$('#changetophotos').addClass("active");
		$('.current').fadeIn(200);
	});
});