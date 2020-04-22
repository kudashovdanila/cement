$(document).ready(function () {
  $('.hero-slider').slick({
    arrows: false,
    fade: true,
    cssEase: 'linear',
    // autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  });

  $(".menu-burger").click(function () {
    $(this).toggleClass("menu-burger_active");
    $(".header-menu").toggleClass("header-menu_active");
    $("body").toggleClass("lock");
  });


});