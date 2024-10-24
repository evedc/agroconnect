new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },


    breakpoints: {
        0: {
            sliderPerView: 1
        },

        768: {
            sliderPerView: 2
        },

        1024: {
            sliderPerView: 3
        },
    }
});