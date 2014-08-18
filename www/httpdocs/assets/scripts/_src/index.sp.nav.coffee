do( $ ) =>

	$("#main-nav-links li").each(
		( __e )->
			__h = $(this).height()
			$(this).height( __h )
		)

	$("#main-nav-links-container").hide()
	$("#main-nav-links-container .container").css( {height: 0} )
	$("#main-nav-links-container").css( "opacity", 1 )

	$("#main-nav-logo-container").toggle(
		( __e )->
			$("#main-nav-links-container").show()
			$("#main-nav-links-container .container")
				.stop()
				.animate(
					{height: "100%"}
					500
					"easeOutCubic"
				)
		( __e )->
			$("#main-nav-links-container .container")
				.stop()
				.animate(
					{height: 0}
					500
					"easeOutCubic"
					()->
						$("#main-nav-links-container").hide()
				)
		)