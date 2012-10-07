jQuery(document).ready( function($) 
{
	// NO favicons
	$('.site_selector_name span').remove();
	
	// TIGHTEN site names row height
	$("#bottom_toolbar #bottom_sites_cont .list_cont .ind_sites a").css({'padding': '4px 0 2px 5px'});

	// ALTERNATE site row colors
	$(".ind_sites.js_sites>a:odd").css({'background-color': '#f5f5f5'});
	
	// NO love
	$('.social_love').remove();
	$('.twitter_icon_hdr,.fb_icon_hdr').remove();
	
	// NO version
	$('#admin_panel_label').remove();
	
	// SELECTIVE modification, according to location (different IWPs)
	if('/infinite/' == window.location.pathname)
	{
		$('#iwpAddonsBtn').remove();
	}
	
	// MOVE menus into Help menu
	$($('li .first-level:contains("idea")').parent().html()).appendTo('li.help ul');
	$('a[href$="1f9ff1"]:first').remove();
	$('a[href$="1f9ff1"]').css({'color':'#111'});

	if('/infinite/' != window.location.pathname)
	{
		$($('#iwpAddonsBtn').parent().html()).appendTo('li.help ul');
		$('#iwpAddonsBtn:first').parent().remove();
	}
	

	// CHANGE Update Core text
	$('#updateCentreBtn').text('iWP');
	
	// REMOVE IWP Logo
	$('#header_bar #logo').remove();
	

});