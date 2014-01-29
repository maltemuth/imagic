$(function() {
  $('.magic').on('mousemove', function(e) {
    b = Math.round(e.offsetX / $(window).width() * 255);
    a = Math.round(e.offsetY / $(window).height() * 255);
    // $('.magic').css("background", "rgb(" + 128 + (a/2) + ", " + 128+ (b/2) + ", "+ ((510-a-b)/4) + ")");
    $('.magic').css("background", "rgb(" + a + ", " + b + ", "+ (256 - (a+b)/2) + ")");

    $('.magic .hearts .one').css("color", "rgb(" + (255-(a/2)) + ", " + b + ", "+ (256 - (a+b)/2) + ")");
    $('.magic .hearts .two').css("color", "rgb(" + a + ", " + (255-(b/2)) + ", "+ (256 - (a+b)/2) + ")");
    $('.magic .hearts .three').css("color", "rgb(" + (255-(a/2)) + ", " + (255-(b/2)) + ", "+ (256 - (a+b)/2) + ")");
    $('.magic .hearts .four').css("color", "rgb(" + (a+b)/2 + ", " + (128 + (a-b))/2 + ", "+ (256 - (a+b)/2) + ")");
  });
});

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    //alert(touch.pageX + " - " + touch.pageY);
    b = Math.round(touch.pageX / $(window).width() * 255);
    a = Math.round(touch.pageY / $(window).height() * 255);

    $('.magic').css("background", "rgb(" + a + ", " + b + ", "+ ((510-a-b)/2)  + ")");
}, false);

$(window).on("resize", function() {
  w = $(window).width();
  h = $(window).height();

  m = Math.min(w, h);

  /*
    $('.magic img').width(0.9 * m);
    $('.magic img').height(0.9 * m);
    
    $('.magic img').css('margin-top', -0.45 * m);
  */

  $('.magic .hearts').css('font-size', 0.5 * m);

  
});

$(window).trigger("resize");