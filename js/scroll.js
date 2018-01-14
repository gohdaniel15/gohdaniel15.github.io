$(document).ready(function($) {
  $(window).scroll(function() {
    if($(this).scrollTop() >= 500) {
      $('section#code h1').addClass('color-code', 250);
      $('section#code .title').addClass('color-title', 250);
      $('section#code .description').addClass('color-description', 250);
    } else {
      $('section#code h1').removeClass('color-code', 250);
      $('section#code .title').removeClass('color-title', 250);
      $('section#code .description').removeClass('color-description', 250);
    }
  })
});
