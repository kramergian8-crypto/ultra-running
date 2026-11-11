$(document).ready(function () {
  $('.menu-icon').click(function () {
    $(this).closest('header').toggleClass('active');
  });
});