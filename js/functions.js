jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);


   /*Testimonials 3columns*/
   $("#testimonial-slider").owlCarousel({
      items: 3,
      autoplay: 2500,
      autoplayHoverPause: true,
      loop: true,
      margin: 30,
      dots: true,
      nav: false,
      responsive: {
         1280: {
            items: 3,
         },
         600: {
            items: 2,
         },
         320: {
            items: 1,
         },
      }
   });


});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      center: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });


  // Vendor carousel
  $('.vendor-carousel').owlCarousel({
      loop: true,
      margin: 45,
      dots: false,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
          0:{
              items:2
          },
          576:{
              items:4
          },
          768:{
              items:6
          },
          992:{
              items:8
          }
      }
  });
  







