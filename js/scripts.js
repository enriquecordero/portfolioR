$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000
    });


    var typed = new Typed(".typed", {
        strings: ["Devops Engineer", "Web Developer", "Student"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false

    });

});