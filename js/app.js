$(document).ready(function() {
    // Hack to allow for full height while maintaining clearfix
    $('.dashboard-menu').height($('.dashboard-body').height());

    // Fading chevrons on dashboard menu
    $('.nav li:not(.active)').hover(function() {
        $(this).find('.fade-on-hover').animate({
            left: '0px',
            opacity: '1'
        }, 300);
    }, function() {
        $(this).find('.fade-on-hover').animate({
            left: '4px',
            opacity: '0'
        }, 300);
    }).click(function() {
        $(this).find('.fade-on-hover').animate({
            left: '-4px',
            opacity: '0'
        }, 300);
    });
});
