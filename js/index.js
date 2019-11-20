var target = $('.hero-text');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    console.log(scrollPercent);
    if(scrollPercent >= 0.2){
        target.find('h3').css('opacity', scrollPercent);
        target.find('p').css('opacity', scrollPercent * 1);
    }
    if(scrollPercent <= 0.5)
        target.find('h3').css('font-size', ((1 - scrollPercent) * 200) + 'px');

});