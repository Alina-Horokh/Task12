$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    navText: ["<span class='nav-btn prev-slide'></span>","<span class='nav-btn next-slide'></span>"],
    // autoplay: true,
    // autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});