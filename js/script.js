AOS.init();
$('.t-slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1);
    $('.numberofslides').text("0" + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText : ["Prev","Next"],
    autoplay: true
});
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots: false,
    navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
});
$(document).ready(function(e){
    $('.mobile-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('opened');
        $('header ul').slideToggle();
    });
});