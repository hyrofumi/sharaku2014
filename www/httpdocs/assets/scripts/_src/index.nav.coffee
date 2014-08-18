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