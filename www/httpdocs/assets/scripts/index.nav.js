//@ sourceMappingURL=index.nav.map
(function() {
  SHARAKUSAI_APPS.INDEX.NAV = (function() {
    var addEventAnchorLink, _$nav, _exports, _id, _id_name;
    _exports = function() {};
    _id_name = null;
    _id = null;
    _$nav = null;
    _exports.initialize = function(__id_name) {
      _id_name = __id_name;
      _id = "#" + _id_name;
      return _$nav = $(_id);
    };
    addEventAnchorLink = function() {
      return $(".main-nav-links-item a").on("click", function(__e) {
        var __href;
        __e.preventDefault();
        __href = $(this).attr("href");
        if ($(__href).length) {
          return $("html, body").stop().animate({
            scrollTop: $(__href).offset().top
          }, 400);
        }
      });
    };
    return _exports;
  })();

}).call(this);
