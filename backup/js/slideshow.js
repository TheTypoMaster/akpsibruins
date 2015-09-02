var banner_rotator_total = 0;
 
function slideSwitch() {
    var $active = $('#slideshow A.active');
 
    if ($active.length == 0) $active = $('#slideshow A:last');
 
    var $sibs = $active.siblings('A');
    var weight = parseInt($active.attr("weight"));
    var rndNum = Math.floor(Math.random() * (banner_rotator_total - weight));
    var sum = 0;
 
    for (var i = 0; i < $sibs.length; i++) {
        sum += parseInt($($sibs[i]).attr("weight"));
 
        if (rndNum < sum) {
 
            var $next = $($sibs[i]);
 
            $active.addClass('last-active');
 
            $next.css({ opacity: 0.0 })
                                                       .addClass('active')
                                                        .animate({ opacity: 1.0 }, 1000, function () {
                                                            $active.removeClass('active last-active');
                                                        });
            break;
        }
    }
}
 
$(function () {
    setInterval('slideSwitch()', 3000);
    var $first = $('#slideshow A:last');
    var $rest = $first.siblings('A');
  
    banner_rotator_total = parseInt($first.attr("weight"));
 
    for (var i = 0; i < $rest.length; i++) {
        banner_rotator_total += parseInt($($rest[i]).attr("weight"));
    }
});