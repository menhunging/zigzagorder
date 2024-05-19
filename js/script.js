$(document).ready(function () {
  if ($(".sliderWorks").length > 0) {
    const swiper = new Swiper(".sliderWorks", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 21,
      navigation: {
        nextEl: ".sliderWorksWrapper .swiper-button-next",
        prevEl: ".sliderWorksWrapper .swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 21,
        },
      },
    });
  }

  if ($(".phoneInput").length > 0) {
    $(".phoneInput").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".menuBurger").length) {
    let menuBurger = $(".menuBurger");
    let menuItem = $(".header .menu .menuItem");
    let menuMobile = $(".menuMobile");

    menuBurger.on("click", function () {
      menuBurger.stop().toggleClass("open");
      menuMobile.stop().toggleClass("open").slideToggle();
    });

    menuItem.on("click", function () {
      if (menuBurger.hasClass("open")) {
        menuBurger.removeClass("open");
        menuMobile.stop().removeClass("open").slideUp();
      }
    });
  }
});
