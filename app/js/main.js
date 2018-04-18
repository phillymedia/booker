require('./smooth-scroll.js')

$(document).ready(function() {

  $(window).on("load resize", function(e) {
    $('.max-width-video-wrapper').each(function() {
      this.style.setProperty('max-width', '100%', 'important');
    });

    var th = $("#text-container").height(),
      header = $(".header").height(),
      w = $(window).height(),
      com = th + header;

    $("#booker-top, .mobile-top").css("margin-top", header);
  });

  // $("#trigger.videoWrapper").find("iframe").css("height",(w-header))

  $(".quote").each(function() {
    $(this).prepend("<span class='quote-large left-q'>&ldquo;</span>")
    // .append("<span class='quote-large right-q'>&rdquo;</span>")
    ;
  })

});
