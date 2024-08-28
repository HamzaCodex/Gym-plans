$(document).ready(function(){
    $('.plan').click(function(){
        $('html, body').animate({
            scrollTop: $('#planselection').offset().top
        }, {
            duration: 200, // Duration of the animation in milliseconds
            easing: 'swing' 
        });
    });
    $('.female').click(function() {
        if ($('.plancontainerfemale').hasClass("hidden")) {
            $('.plancontainerfemale').removeClass("hidden");
            $('.plancontainer').addClass("hidden");
        }
    });
    $('.male').click(function() {
        if ($('.plancontainer').hasClass("hidden")) {
            $('.plancontainer').removeClass("hidden");
            $('.plancontainerfemale').addClass("hidden");
        }
    });
});

