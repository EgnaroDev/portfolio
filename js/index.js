// This code is not written by me.  This code was needed for smooth scrolling
$(document).on('click', 'a', function(event){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1250);
});