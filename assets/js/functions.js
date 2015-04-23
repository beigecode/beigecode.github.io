$(document).ready(function() {

  // smooth scrolling to the hashed locations ('#about', '#clients', etc)
  smoothScroll(1000);
  slider()
});

  function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {

      var target =  $( $(this).attr('href') );

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, duration);
      }
    });
  }

  function slider() {
    $('.thumb-unit').click(function() {
      $('.projects-slider').css('left', '-100%');
    })
    $('.icon-return').click(function() {
      $('.projects-slider').css('left', '0%%');
    })
  }
