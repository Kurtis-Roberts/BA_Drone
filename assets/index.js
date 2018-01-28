$(document).ready(function() {



    setTimeout(function() {
        $(".scroll").animate({ 'opacity': '1' }, 1000);
    }, 1500);

    setTimeout(function() {
        $("#video_overlays").animate({ 'opacity': '1' }, 1000);
    }, 900);





})

$("#landing-button").on("click touchstart", function(event) {
    $('html, body').animate({
        scrollTop: $("#post-section").offset().top
    }, 1000);

})
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}