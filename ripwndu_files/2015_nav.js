$(document).ready(function() {
	/* affix the navbar after scroll below header */
	$('#nav').affix({
		offset: {
			top: $('header').height()-$('#nav').height()
		}
	});	
	
	$('#gdm-ad-wallpaper').affix({
		offset: {
			top: $('#nav').height()
		}
	});
	
	$('#nav').on('affix.bs.affix', function () {
		$('#nav_logo').removeClass('hide');
	});
	
	$('#nav').on('affix-top.bs.affix', function () {
		$('#nav_logo').addClass('hide');
	});
	
	/* call script to add ellipsis to headlines */
	ellipsisTiles();
	
	if($('#severe_alert').length) {
		$('#severe_alert').dotdotdot({
			after: "a.readmore"
		});
		
		$('#severe_alert a').click(function() {
			$('#severe_alert').removeClass("alert_height_static");
			var content = $("#severe_alert").triggerHandler("originalContent");
			$("#severe_alert p").hide();
			$("#severe_alert").append( content );
		});
	}
	
});

function ellipsisTiles() {
/* source - http://dotdotdot.frebsite.nl/ */
/* add ellipsis to the end of the headlines */
$('#homeTopStory').dotdotdot({});
}
