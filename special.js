$(".special").owlCarousel({
  margin: 25,
  padding: 25,
  autoplay: true,
  loop: true,
  // dots: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      dots: false,
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      dots: false,
      nav: false,
    },
    1000: {
      items: 3,
      loop: false,
      nav: false,
    },
  },
});

$(".main_features").owlCarousel({
  margin: 0,
  autoplay: true,
  loop: true,
  dots: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      margin: 10,
      dots: true,
      nav: false,
    },
    1000: {
      items: 3,
      margin: 10,
      nav: false,
    },
  },
});
