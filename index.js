$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

