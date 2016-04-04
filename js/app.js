var screen_sm_min = 768;

$(document).ready(function() {
    // Fading chevrons on dashboard menu
    var fadeDistance = '4px';
    var fadeDuration = 300;
    $('.nav li:not(.active) .fade-on-hover').css('left', fadeDistance);
    $('.nav li:not(.active)').hover(function() {
        $(this).find('.fade-on-hover').animate({
            left: '0px',
            opacity: '1'
        }, fadeDuration);
    }, function() {
        $(this).find('.fade-on-hover').animate({
            left: fadeDistance,
            opacity: '0'
        }, fadeDuration);
    }).click(function() {
        $(this).find('.fade-on-hover').animate({
            left: '-' + fadeDistance,
            opacity: '0'
        }, fadeDuration);
    });
});
