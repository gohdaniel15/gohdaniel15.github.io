$(document).ready(function($) {
  $(window).scroll(function() {
    if($(this).scrollTop() >= 600) {
      $('section#code h1').addClass('color-code', 150);
      $('section#code .title').addClass('color-title', 150);
      $('section#code .description').addClass('color-description', 150);
    } else {
      $('section#code h1').removeClass('color-code', 150);
      $('section#code .title').removeClass('color-title', 150);
      $('section#code .description').removeClass('color-description', 150);
    }
  })
});
