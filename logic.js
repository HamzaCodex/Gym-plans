$(document).ready(function(){
    $('.plan').click(function(){
        $('html, body').animate({
            scrollTop: 736
        }, {
            duration: 200, // Duration of the animation in milliseconds
            easing: 'swing' 
        });
    });
    $('.female').click(function() {
        if ($('.plancontainerfemale').hasClass("hidden")) {
            $('.plancontainerfemale').removeClass("hidden");
            $('.fescrollup').removeClass("hidden");
            $('#scrollup').addClass("hidden");
            $('.plancontainer').addClass("hidden");
        }
    });
    $('.male').click(function() {
        if ($('.plancontainer').hasClass("hidden")) {
            $('.plancontainer').removeClass("hidden");
            $('#scrollup').removeClass("hidden");
            $('.fescrollup').addClass("hidden");
            $('.plancontainerfemale').addClass("hidden");
        }
    });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 816) {
                $('#scrollup').fadeIn();
            }
            else {
                $('#scrollup').fadeOut();
                }
        })
    
    $('.backtotop').click(function(){
        $('html, body').animate({
            scrollTop: 0
            }, {
                duration: 200, 
            easing: 'swing'})
    })
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop(); // Get the current scroll position in pixels
        console.log("Scrolled pixels: " + scrollPosition); // Log the scroll position
    });
})
