$(document).ready(function(){
sublime.load();
sublime.ready(function(){
	var first='<video id="iY58T_R_sqA" class="sublime" poster="http://www.akpsibruins.com/media/images/large/social1.jpg" width="640" height="360" data-uid="iY58T_R_sqA" data-youtube-id="iY58T_R_sqA" data-autoresize="fit" preload="none">'+
'</video>';
	var second='<video id="W1DZf1TAbiQ" class="sublime" width="640" height="360" data-uid="W1DZf1TAbiQ" data-youtube-id="W1DZf1TAbiQ" data-autoresize="fit" preload="none">'+
'</video>';
	var third='<video id="Mtk0L8Z_29A" class="sublime" width="640" height="360" data-uid="Mtk0L8Z_29A" data-youtube-id="Mtk0L8Z_29A" data-autoresize="fit" preload="none">'+
'</video>';
	var fourth='<video id="w2kMSllwhnA" class="sublime" width="640" height="360" data-uid="w2kMSllwhnA" data-youtube-id="w2kMSllwhnA" data-autoresize="fit" preload="none">'+
'</video>';
$('#vid1').click(function(){
	sublime.unprepare('#mainvid.first-child');
	$('#mainvid').empty();
	$('#mainvid').append(first);
	sublime.prepare('iY58T_R_sqA',function(player){});
	$('#title').html("Who We Are");
	$('#details').html("Directed &amp Produced by : Jillene Ma and Victor Wu");
})
$('#vid2').click(function(){
	sublime.unprepare('#mainvid.first-child');
	$('#mainvid').empty();
	$('#mainvid').append(second);
	sublime.prepare('W1DZf1TAbiQ',function(player){});
	$('#title').html("Work Hard, Play Hard.");
	$('#details').html("Produced Edited &amp; Directed by: Stephen Tan | Filmed by : David Mao");

})
$('#vid3').click(function(){
	sublime.unprepare('#mainvid.first-child');
	$('#mainvid').empty();
	$('#mainvid').append(third);
	sublime.prepare('Mtk0L8Z_29A',function(player){});
	$('#title').html("Hi, I'm Alpha Kappa Psi.");
	$('#details').html("Featuring Daniel Toolan and Errol Barnett");
})
$('#vid4').click(function(){
	sublime.unprepare('#mainvid.first-child');
	$('#mainvid').empty();
	$('#mainvid').append(fourth);
	sublime.prepare('w2kMSllwhnA',function(player){});
	$('#title').html("A Life Less Ordinary.");
	$('#details').html("Produced Edited &amp; Directed by: Jono Lee | Quote by: Harold Tan");
})
})



});
