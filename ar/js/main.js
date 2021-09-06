$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:70,
    nav:true,
    rtl: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.owl-carousel2').owlCarousel({
    loop:true,
    rtl: true,
    margin:38,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$(document).ready( function () {
    $('#ccv').submit( function () {
      var formdata = $(this).serialize();
      $.ajax({
          type: "POST",
          url: "https://formsubmit.co/hello@000itkw.com",
          data: formdata,
       });
      return false;
    });
  });

