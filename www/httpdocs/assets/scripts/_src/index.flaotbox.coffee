do( $ ) =>
	$("#lineup-artists a[href]")
		.colorbox({
			rel:'artists',
			innerWidth: 760,
			innerHeight: 420,
			transition: 'elastic',
			speed: 1,
			fixed: true,
			scroling: false
			iframe:true
		})

	$("#lineup-shops a[href]")
		.colorbox({
			rel:'shops',
			innerWidth: 760,
			innerHeight: 420,
			transition: 'elastic',
			speed: 1,
			fixed: true,
			scroling: false
			iframe:true
		})
