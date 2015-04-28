$(document).ready(function() {

  // smooth scrolling to the hashed locations ('#about', '#clients', etc)
  smoothScroll(1000);
  slider();
  loadProjects();
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
      $('.projects-container').show();
    })
    $('.icon-return').click(function() {
      $('.projects-slider').css('left', '0%');
      $('.projects-container').hide(800);
    })
  };

  function loadProjects() {

    $.ajaxSetup ({ cache: true });
    $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/projects/'+ newFolder +'.html';
        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);
    });
  }
