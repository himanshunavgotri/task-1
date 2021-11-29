var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop:false,
    autoplay:{
        delay:2500,
        disableonInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  