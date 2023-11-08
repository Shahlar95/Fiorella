var swiper = new Swiper(".mainSlider", {
    // cssMode: true,
    spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
   
  
    keyboard: true,
  });

  var swiper2 = new Swiper(".twoSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true
  });

  const swiperEl = document.querySelector('.mainSlider');
  const buttonEl = document.querySelector('i');

  buttonEl.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
  });