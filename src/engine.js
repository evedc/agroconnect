new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 4
        },
    }
});
