$(function () {
  $('#js-menu-btn, .nav-link').on('click', function () {
    $('.nav').slideToggle(500);
    $('#js-menu-btn').toggleClass('menu-btn--open');
  });
});