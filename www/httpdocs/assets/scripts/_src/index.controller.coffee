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
