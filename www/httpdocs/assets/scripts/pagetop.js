//@ sourceMappingURL=pagetop.map
(function() {
  var _this = this;

  (function($) {
    var displaySwitch, _$pagetop;
    _$pagetop = $("#pagetop");
    _$pagetop.on("click", function(__e) {
      return $("html,body").stop().animate({
        scrollTop: 0
      }, 500, "easeOutCubic");
    });
    displaySwitch = function() {
      if ($(window).scrollTop() > $(window).height()) {
        if (_$pagetop.css("display") !== "block") {
          _$pagetop.css({
            display: "block"
          });
          return _$pagetop.stop().animate({
            opacity: 1
          }, 500, "easeOutCubic");
        }
      } else {
        if (_$pagetop.css("display") !== "none") {
          return _$pagetop.stop().animate({
            opacity: 0
          }, 500, "easeOutCubic", function() {
            return _$pagetop.css({
              display: "none"
            });
          });
        }
      }
    };
    displaySwitch();
    return $(window).on("scroll", function(__e) {
      return displaySwitch();
    });
  })($);

}).call(this);
