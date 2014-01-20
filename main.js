$(function() {
  $('.magic').on('mousemove', function(e) {
    b = Math.round(e.offsetX / $(window).width() * 255);
    a = Math.round(e.offsetY / $(window).height() * 255);
    $('.magic').css("background", "rgb(" + a + ", " + b + ", 255)");
  });
});