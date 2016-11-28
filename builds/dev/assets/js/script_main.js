var owl;

$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        nav: false,
        loop: true,
        // rewind: true, // rewind to first slide
        autoplay: true,
        // autoplaySpeed: 5000,
        // autoplayTimeout: 5000,
        dotsSpeed: 400,
        items: 1,
        dotsContainer: '#owl-service-slide-dots'
    });

    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

});