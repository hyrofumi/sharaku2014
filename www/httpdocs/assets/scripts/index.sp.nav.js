//@ sourceMappingURL=index.sp.nav.map
(function() {
  var _this = this;

  (function($) {
    $("#main-nav-links li").each(function(__e) {
      var __h;
      __h = $(this).height();
      return $(this).height(__h);
    });
    $("#main-nav-links-container").hide();
    $("#main-nav-links-container .container").css({
      height: 0
    });
    $("#main-nav-links-container").css("opacity", 1);
    return $("#main-nav-logo-container").toggle(function(__e) {
      $("#main-nav-links-container").show();
      return $("#main-nav-links-container .container").stop().animate({
        height: "100%"
      }, 500, "easeOutCubic");
    }, function(__e) {
      return $("#main-nav-links-container .container").stop().animate({
        height: 0
      }, 500, "easeOutCubic", function() {
        return $("#main-nav-links-container").hide();
      });
    });
  })($);

}).call(this);
