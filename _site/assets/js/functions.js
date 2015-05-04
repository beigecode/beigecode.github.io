$(document).ready(function () {

    // smooth scrolling to the hashed locations ('#about', '#clients', etc)
    smoothScroll(1000);
    slider();
    loadProjects();
    clientSlide();
});

function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

function slider() {
    $('.thumb-unit').click(function () {
        $('.projects-slider').css('left', '-100%');
        $('.projects-container').show();
    });
    $('.icon-return').click(function () {
        $('.projects-slider').css('left', '0%');
        $('.projects-container').hide(800);
    });
}

function loadProjects() {

    $.ajaxSetup({
        cache: true
    });
    $('.thumb-unit').click(function () {
        var $this = $(this),
            newTitle = $this.find('strong').text(),
            newFolder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = '/projects/' + newFolder + '.html';

        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);
    });
}
function clientSlide() {

  $('.client-logo, .clients-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);

    $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
    $siblings.removeClass('active-client');
    $this.addClass('active-client');
  });


  $('.client-control-next, .client-control-prev').click(function() {

    var $this = $(this),
        curActiveClient = $('.clients-belt').find('.active-client'),
        position = $('.clients-belt').children().index(curActiveClient),
        clientNum = $('.client-unit').length;

      if($this.hasClass('client-control-next')) {

        if(position < clientNum -1){
          $('.active-client').removeClass('active-client').next().addClass('active-client');
        } else {
          $('.client-unit').removeClass('active-client').first().addClass('active-client');
          $('.client-logo').removeClass('active-client').first().addClass('active-client');
        }

      } else {

        if (position === 0) {
          $('.client-unit').removeClass('active-client').last().addClass('active-client');
          $('.client-logo').removeClass('active-client').last().addClass('active-client');
        } else {
          $('.active-client').removeClass('active-client').prev().addClass('active-client');
        }

      }


  });

}
