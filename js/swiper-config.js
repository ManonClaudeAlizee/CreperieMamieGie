console.log("swiper-config chargé");

document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper(".recetteSwiper", {
        spaceBetween: 20,

        slidesPerView: 1.2,

        navigation: {
            nextEl: ".recette-next",
            prevEl: ".recette-prev",
        },

        breakpoints: {
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });

});