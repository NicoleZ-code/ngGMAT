function time_show() {

	$('.date_has_event').each(function () {
	
		// options
		var distance = 10;
		var time = 250;
		var hideDelay = 500;

		var hideDelayTimer = null;

		// tracker
		var beingShown = false;
		var shown = false;

		var trigger = $(this);
		var str="<div class='events'><dl><dt>如何从GMAT考试中收益</dt>"+
		"<dd>授课老师：张老师</dd><dd>授课时间：15:00-17:00</dd><dd>剩余名额：3</dd>"+
		"<dd class='appontiment'><a>立即预约</a></dd></dl></div>"
		$(this).append(str);
	
		var popup = $('.events dl', this).css('opacity', 0);

		// set the mouseover and mouseout on both element
		$([trigger.get(0), popup.get(0)]).mouseover(function () {
			// stops the hide event if we move from the trigger to the popup element
			if (hideDelayTimer) clearTimeout(hideDelayTimer);

			// don't trigger the animation again if we're being shown, or already visible
			if (beingShown || shown) {
				return;
			} else {
				beingShown = true;

				// reset position of popup box
				popup.css({
					bottom: 0,
					left: -146,
					display: 'block' // brings the popup back in to view
				})

				// (we're using chaining on the popup) now animate it's opacity and position
				.animate({
					bottom: '0px',
					opacity: 1
				}, time, 'swing', function() {
					// once the animation is complete, set the tracker variables
					beingShown = false;
					shown = true;
				});
			}
		}).mouseout(function () {
			// reset the timer if we get fired again - avoids double animations
			if (hideDelayTimer) clearTimeout(hideDelayTimer);

			// store the timer so that it can be cleared in the mouseover if required
			hideDelayTimer = setTimeout(function () {
				hideDelayTimer = null;
				popup.animate({
					bottom: '0px',
					opacity: 0
				}, time, 'swing', function () {
					// once the animate is complete, set the tracker variables
					shown = false;
					// hide the popup entirely after the effect (opacity alone doesn't do the job)
					popup.css('display', 'none');
				});
			}, hideDelay);
		});
	});

}

