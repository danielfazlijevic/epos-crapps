var target = $('.hero-text');
var targetHeight = target.outerHeight();
var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
var multiplier = isMobile ? 1 : 15;
$(document).scroll( throttle(50));



function throttle(wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
        // console.log(scrollPercent);
        if(scrollPercent >= 0.2){
            target.find('h3').css('opacity', 0.2 + (scrollPercent * 0.8));
            target.find('p').css('opacity', scrollPercent * 1);
        }
        if(scrollPercent <= 0.5)
            target.find('h3').css('font-size', (1 + (1 - scrollPercent) * multiplier) + 'rem');
    
        time = Date.now();
      }
    };
  }
  