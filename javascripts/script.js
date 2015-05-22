$(window).load(function(){
  //jumbotron display
  if (screen.width > 720) {
    $(".jumbotron").addClass('animated slideInLeft');
  }
  $(".jumbotron").css('visibility', 'visible');

  //scroll-down
  $(".scroll-down").addClass('animated pulse');

  //Scrolling animation
  function scrollTo(link, target) {
    link.click(function(e) {
      e.preventDefault();
      target
        .velocity("scroll", 1000)
        .velocity({opacity: 1});
    });
  }

  scrollTo($('.intro-link'), $('.introduction'));
  scrollTo($('.resume-link'), $('.resume'));
  scrollTo($('.projects-link'), $('.projects'));
});
