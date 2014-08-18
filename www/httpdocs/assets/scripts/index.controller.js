//@ sourceMappingURL=index.controller.map
(function() {
  var SHARAKUSAI_APPS;

  SHARAKUSAI_APPS = SHARAKUSAI_APPS || {};

  SHARAKUSAI_APPS.INDEX = SHARAKUSAI_APPS.INDEX || {};

  SHARAKUSAI_APPS.INDEX.MAINVIEW = (function() {
    var setVideoScale, _$main_view, _$video, _$video_container, _exports, _id, _id_name, _video;
    _exports = function() {};
    _id_name = null;
    _id = null;
    _$main_view = null;
    _$video = null;
    _$video_container = null;
    _video = function() {};
    _video.size = function() {};
    _exports.initialize = function(__id_name) {
      var __v;
      _id_name = __id_name;
      _id = "#" + _id_name;
      _$main_view = $(_id);
      _$video_container = _$main_view.find(".video");
      _$video = _$main_view.find("video");
      _video.size.width = 640;
      _video.size.height = 360;
      SHARAKUSAI_APPS.INDEX.MAINVIEW_ANIMATION.initialize();
      __v = document.getElementById("video-player");
      return __v.addEventListener("canplaythrough", function() {
        return SHARAKUSAI_APPS.INDEX.MAINVIEW_ANIMATION.animate();
      });
    };
    _exports.setHeight = function(__nav_height) {
      var __h;
      __h = $(window).height() - __nav_height;
      _$main_view.height(__h);
      _$video_container.css("padding-bottom", __h);
      return setVideoScale(__h);
    };
    setVideoScale = function(__height) {
      var __scale, __scale_height, __scale_width;
      __scale_height = __height / _video.size.height;
      __scale_width = $(window).width() / _video.size.width;
      __scale = __scale_height >= __scale_width ? __scale_height : __scale_width;
      _$video.height(_video.size.height * __scale);
      return _$video.width(_video.size.width * __scale);
    };
    return _exports;
  })();

  SHARAKUSAI_APPS.INDEX.MAINVIEW_ANIMATION = (function() {
    var _$date, _$logo_image, _$logo_text, _$place, _exports;
    _exports = function() {};
    _$logo_image = null;
    _$logo_text = null;
    _$date = null;
    _$place = null;
    _exports.initialize = function() {
      _$logo_image = $("#video-logo");
      _$logo_text = $("#video-logo-text");
      _$date = $("#video-date");
      return _$place = $("#video-place");
    };
    _exports.animate = function() {
      var __delay;
      __delay = 1500;
      _$logo_image.stop().delay(__delay).animate({
        opacity: 1
      }, 8000);
      _$logo_text.stop().delay(__delay).animate({
        opacity: 1
      }, 8000);
      _$date.stop().delay(__delay + 2000).animate({
        opacity: 1
      }, 2000);
      return _$place.stop().delay(__delay + 2000).animate({
        opacity: 1
      }, 2000);
    };
    return _exports;
  })();

  SHARAKUSAI_APPS.INDEX.NAV = (function() {
    var addEventAnchorLink, onObserveNav, _$nav, _exports, _id, _id_name;
    _exports = function() {};
    _id_name = null;
    _id = null;
    _$nav = null;
    _exports.initialize = function(__id_name) {
      _id_name = __id_name;
      _id = "#" + _id_name;
      _$nav = $(_id);
      return addEventAnchorLink();
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
    _exports.getHeight = function() {
      var __h;
      __h = parseInt(_$nav.css("padding-bottom").replace("px", ""), 10) + parseInt(_$nav.css("padding-top").replace("px", ""), 10) + _$nav.height();
      return __h;
    };
    onObserveNav = function() {
      return console.log(_$nav_pos_observer.offset().top);
    };
    _exports.setFixPosition = function() {
      console.log("aaa");
      return _$nav.stickUp({
        parts: {
          0: 'about-container',
          1: 'lineup-container',
          2: 'access-container',
          3: 'tickets-container'
        },
        itemHover: 'active',
        topMargin: 'auto'
      });
    };
    return _exports;
  })();

  SHARAKUSAI_APPS.INDEX.CONTROLLER = (function() {
    var onWindowResize, _exports, _mainview, _module, _nav;
    _exports = function() {};
    _module = function() {};
    _nav = null;
    _mainview = null;
    _exports.initialize = function(__nav, __mainview) {
      _nav = __nav;
      _mainview = __mainview;
      onWindowResize();
      return $(window).on("resize", function() {
        return onWindowResize();
      });
    };
    onWindowResize = function(__e) {
      return _mainview.setHeight(_nav.getHeight());
    };
    return _exports;
  })();

  (function($) {
    var __mainview, __nav;
    __mainview = SHARAKUSAI_APPS.INDEX.MAINVIEW;
    __mainview.initialize("main-image");
    __nav = SHARAKUSAI_APPS.INDEX.NAV;
    __nav.initialize("main-nav");
    return SHARAKUSAI_APPS.INDEX.CONTROLLER.initialize(__nav, __mainview);
  })(jQuery);

}).call(this);
