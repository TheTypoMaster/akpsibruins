	
	$(document).ready(function(){
 		$('#aboutul').mouseenter(function(){

 			$('#aboutul').css("background-color","rgb(40,40,40)");
      $('#abouttriangle').fadeIn(100);
 			$('#aboutmenu').fadeIn(100);
 			$('#rushul, #mediaul,#alumniul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#aboutmenu').fadeOut(100);
 				 $('#aboutul').css("background-color","transparent");
        $('#abouttriangle').fadeOut(100);

 			})
 			$('#aboutmenu').mouseleave(function(){
 				$('#aboutmenu').fadeOut(100);
 				$('#aboutul').css("background-color","transparent");
        $('#abouttriangle').fadeOut(100);

 			})
 		
 		
 		});

 		$('#rushul').mouseenter(function(){
 			$('#rushul').css("background-color","rgb(40,40,40)");
 			$('#rushmenu').fadeIn(100);
      $('#rushtriangle').fadeIn(100);

 			$('#aboutul, #mediaul,#alumniul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#rushmenu').fadeOut(100);
  			 $('#rushul').css("background-color","transparent");
         $('#rushtriangle').fadeOut(100);

 			})
 			$('#rushmenu').mouseleave(function(){
 				$('#rushmenu').fadeOut(100);
			 $('#rushul').css("background-color","transparent");
        $('#rushtriangle').fadeOut(100);

 			})
 		
 		
 		});

	 	$('#mediaul').mouseenter(function(){
	 		 $('#mediaul').css("background-color","rgb(40,40,40)");
 			$('#mediamenu').fadeIn(100);
      $('#mediatriangle').fadeIn(100);

 			$('#aboutul, #rushul,#alumniul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#mediamenu').fadeOut(100);
   				 $('#mediaul').css("background-color","transparent");
      $('#mediatriangle').fadeOut(100);

				 

 			})
 			$('#mediamenu').mouseleave(function(){
 				$('#mediamenu').fadeOut(100);
   				 $('#mediaul').css("background-color","transparent");
      $('#mediatriangle').fadeOut(100);

 			})
 		
 		});

 		$('#alumniul').mouseenter(function(){
 		 	$('#alumniul').css("background-color","rgb(40,40,40)");
 			$('#alumnimenu').fadeIn(100);
 			$('#alumnitriangle').fadeIn(100);

      $('#aboutul, #rushul,#mediaul,#partnershipsul,#contactul').mouseenter(function(){
 				 $('#alumnimenu').fadeOut(100);
   				 $('#alumniul').css("background-color","transparent");
      $('#alumnitriangle').fadeOut(100);


 			})
 			$('#alumnimenu').mouseleave(function(){
 				$('#alumnimenu').fadeOut(100);
  				 $('#alumniul').css("background-color","transparent");
      $('#alumnitriangle').fadeOut(100);

 			})
 		});

 		 $('#partnershipsul').mouseenter(function(){
  			$('#partnershipsul').css("background-color","rgb(40,40,40)");		
 			$('#partnershipsmenu').fadeIn(100);
      $('#partnershipstriangle').fadeIn(100);

 			$('#aboutul, #rushul,#mediaul,#alumniul,#contactul').mouseenter(function(){
 				 $('#partnershipsmenu').fadeOut(100);
  				 $('#partnershipsul').css("background-color","transparent");
      $('#partnershipstriangle').fadeOut(100);


 			})
 			$('#partnershipsmenu').mouseleave(function(){
 				$('#partnershipsmenu').fadeOut(100);
   				 $('#partnershipsul').css("background-color","transparent");
      $('#partnershipstriangle').fadeOut(100);

 			})
 		});
   
 	});
