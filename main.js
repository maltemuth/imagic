$(function() {
  $('.magic').on('mousemove', function(e) {
    b = Math.round(e.offsetX / $(window).width() * 255);
    a = Math.round(e.offsetY / $(window).height() * 255);
    $('.magic').css("background", "rgb(" + a + ", " + b + ", "+ (255-a) + ")");
  });
});

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    //alert(touch.pageX + " - " + touch.pageY);
    b = Math.round(touch.pageX / $(window).width() * 255);
    a = Math.round(touch.pageY / $(window).height() * 255);

    $('.magic').css("background", "rgb(" + a + ", " + b + ", "+ (255-a) + ")");
}, false);

$(window).on("resize", function() {
  w = $(window).width();
  h = $(window).height();

  m = Math.min(w, h);

  $('.magic img').width(0.9 * m);
  $('.magic img').height(0.9 * m);
  
  $('.magic img').css('margin-top', -0.45 * m);
});

$(window).trigger("resize");