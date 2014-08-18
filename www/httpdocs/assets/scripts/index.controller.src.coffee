SHARAKUSAI_APPS = SHARAKUSAI_APPS || {}
SHARAKUSAI_APPS.INDEX = SHARAKUSAI_APPS.INDEX || {}
SHARAKUSAI_APPS.INDEX.MAINVIEW = do()->
	_exports = ()->
	_id_name = null
	_id = null
	_$main_view = null

	_$video = null
	_$video_container = null
	_video = ()->
	_video.size = ()->

	_exports.initialize = ( __id_name )->
		_id_name = __id_name
		_id = "#" + _id_name
		_$main_view = $( _id )

		_$video_container = _$main_view.find(".video")
		_$video = _$main_view.find("video")
		_video.size.width = 640
		_video.size.height = 360

		SHARAKUSAI_APPS.INDEX.MAINVIEW_ANIMATION.initialize()

		__v = document.getElementById("video-player");
		__v.addEventListener(
			"canplaythrough"
			()->
				SHARAKUSAI_APPS.INDEX.MAINVIEW_ANIMATION.animate()
			)

	_exports.setHeight = ( __nav_height )->
		__h = $(window).height() - __nav_height
		_$main_view.height( __h  )
		_$video_container.css("padding-bottom", __h)

		setVideoScale( __h )

	# 
	# @param __height : double
	setVideoScale = ( __height )->
		__scale_height = __height / _video.size.height
		__scale_width = $(window).width() / _video.size.width
		__scale = if __scale_height >= __scale_width then __scale_height else __scale_width

		_$video.height( _video.size.height * __scale )
		_$video.width( _video.size.width * __scale )



	return _exports

SHARAKUSAI_APPS.INDEX.MAINVIEW_ANIMATION = do()->
	_exports = ()->

	_$logo_image = null
	_$logo_text = null

	_$date = null
	_$place = null

	_exports.initialize = ()->
		_$logo_image = $("#video-logo")
		_$logo_text = $("#video-logo-text")
		_$date = $("#video-date")
		_$place = $("#video-place")


	_exports.animate = ()->
		__delay = 1500
		_$logo_image.stop().delay( __delay ).animate({opacity: 1}, 8000)
		_$logo_text.stop().delay( __delay ).animate({opacity: 1}, 8000)

		_$date.stop().delay( __delay + 2000 ).animate({opacity: 1}, 2000)
		_$place.stop().delay( __delay + 2000 ).animate({opacity: 1}, 2000)


	return _exports


SHARAKUSAI_APPS.INDEX.NAV = do()->
	_exports = ()->
	_id_name = null
	_id = null
	_$nav = null

	_exports.initialize = ( __id_name )->
		_id_name = __id_name
		_id = "#" + _id_name
		_$nav = $( _id )

		addEventAnchorLink()

	addEventAnchorLink = ()->
		$(".main-nav-links-item a").on(
			"click"
			( __e )->
				__e.preventDefault()
				__href = $(this).attr "href"

				if $(__href).length
					$("html, body").stop().animate({scrollTop: $(__href).offset().top}, 400)

			)

	_exports.getHeight = ()->
		__h = parseInt(_$nav.css("padding-bottom").replace("px", ""), 10) + parseInt(_$nav.css("padding-top").replace("px", ""), 10) + _$nav.height()
		return __h

	onObserveNav = ()->
		console.log _$nav_pos_observer.offset().top

	_exports.setFixPosition = ()->
		console.log "aaa"
		_$nav.stickUp({
				parts: {
					0: 'about-container'
					1: 'lineup-container'
					2: 'access-container'
					3: 'tickets-container'
				}
				itemHover: 'active'
				topMargin: 'auto'
			})




	return _exports
SHARAKUSAI_APPS.INDEX.CONTROLLER = do()->
	_exports = ()->

	_module = ()->
	_nav = null
	_mainview = null

	_exports.initialize = ( __nav, __mainview )->
		_nav = __nav
		_mainview = __mainview

		onWindowResize()
		$(window).on(
			"resize"
			()->
				onWindowResize()
			)

	onWindowResize = ( __e )->
		_mainview.setHeight( _nav.getHeight() )


	return _exports


do ($ = jQuery)->
	__mainview = SHARAKUSAI_APPS.INDEX.MAINVIEW
	__mainview.initialize( "main-image" )
	__nav = SHARAKUSAI_APPS.INDEX.NAV
	__nav.initialize( "main-nav" )
	SHARAKUSAI_APPS.INDEX.CONTROLLER.initialize( __nav, __mainview)
