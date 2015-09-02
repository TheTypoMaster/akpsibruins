$(document).ready(function(){
	var $text= $('#applicationtext');
	  var windowScroll;

  $(window).scroll(function() {
        slidingTitle();
    });

function slidingTitle() {
    //Get scroll position of window
    var $textposition=$text.css('margin-right');
    windowScroll = $(this).scrollTop();

    $text.css({
      'opacity' : 1-(windowScroll/400),
      'letter-spacing':4+(windowScroll/20)+"px",
      'margin-top':250 - (windowScroll/4.5)+"px"
    });
    $('#applicationphoto').css({'opacity':1-(windowScroll/400),
      'background-position' : 'center ' + (-windowScroll/3)+"px"
    });

  }


});


