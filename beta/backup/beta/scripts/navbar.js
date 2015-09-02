	
	$(document).ready(function(){
 		$('#aboutul').mouseenter(function(){

 			$('#aboutul').css("background-color","rgb(40,40,40)");
 			$('#aboutmenu').fadeIn(100);
 			$('#rushul, #mediaul,#alumniul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#aboutmenu').fadeOut(100);
 				 $('#aboutul').css("background-color","transparent");
 			})
 			$('#aboutmenu').mouseleave(function(){
 				$('#aboutmenu').fadeOut(100);
 				$('#aboutul').css("background-color","transparent");
 			})
 		
 		
 		});

 		$('#rushul').mouseenter(function(){
 			$('#rushul').css("background-color","rgb(40,40,40)");
 			$('#rushmenu').fadeIn(100);
 			$('#aboutul, #mediaul,#alumniul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#rushmenu').fadeOut(100);
  				 $('#rushul').css("background-color","transparent");
 			})
 			$('#rushmenu').mouseleave(function(){
 				$('#rushmenu').fadeOut(100);
			 $('#rushul').css("background-color","transparent");

 			})
 		
 		
 		});

	 	$('#mediaul').mouseenter(function(){
	 		 $('#mediaul').css("background-color","rgb(40,40,40)");
 			$('#mediamenu').fadeIn(100);
 			$('#aboutul, #rushul,#alumniul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#mediamenu').fadeOut(100);
   				 $('#mediaul').css("background-color","transparent");
				 

 			})
 			$('#mediamenu').mouseleave(function(){
 				$('#mediamenu').fadeOut(100);
   				 $('#mediaul').css("background-color","transparent");

 			})
 		
 		});

 		$('#alumniul').mouseenter(function(){
 		 	$('#alumniul').css("background-color","rgb(40,40,40)");
 			$('#alumnimenu').fadeIn(100);
 			$('#aboutul, #rushul,#mediaul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#alumnimenu').fadeOut(100);
   				 $('#alumniul').css("background-color","transparent");


 			})
 			$('#alumnimenu').mouseleave(function(){
 				$('#alumnimenu').fadeOut(100);
  				 $('#alumniul').css("background-color","transparent");

 			})
 		});

 		 $('#partnershipsul').mouseenter(function(){
  			$('#partnershipsul').css("background-color","rgb(40,40,40)");		
 			$('#partnershipsmenu').fadeIn(100);
 			$('#aboutul, #rushul,#mediaul,#alumniul,#contactul').mouseenter(function(){
 				 $('#partnershipsmenu').fadeOut(100);
  				 $('#partnershipsul').css("background-color","transparent");


 			})
 			$('#partnershipsmenu').mouseleave(function(){
 				$('#partnershipsmenu').fadeOut(100);
   				 $('#partnershipsul').css("background-color","transparent");

 			})
 		});
   
 	});
