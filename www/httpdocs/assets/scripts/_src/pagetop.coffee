do( $ ) =>
	_$pagetop = $("#pagetop")

	_$pagetop.on(
		"click"
		( __e )->
			$("html,body")
				.stop()
				.animate(
					{scrollTop: 0}
					500
					"easeOutCubic"
				)
		)

	displaySwitch = ()->
		if $(window).scrollTop() > $(window).height()
			if _$pagetop.css("display") != "block"
				_$pagetop.css(display: "block")
				_$pagetop
					.stop()
					.animate(
						{ opacity: 1 }
						500
						"easeOutCubic"
					)
		else
			if _$pagetop.css("display") != "none"
				_$pagetop
					.stop()
					.animate(
						{ opacity: 0 }
						500
						"easeOutCubic"
						()->
							_$pagetop.css(display: "none")

					)

	displaySwitch()

	$(window)
		.on(
			"scroll"
			( __e )->
				displaySwitch()
		)

