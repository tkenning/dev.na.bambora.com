/** 
 * Open all external links in a new window
 */
jQuery(document).ready(function($) {
    $('a').not('[href*="mailto:"]').not('.not-new-tab-for-link').each(function () {
		var isInternalLink = new RegExp('/' + window.location.host + '/');
		if ( ! isInternalLink.test(this.href) ) {
			$(this).attr('target', '_blank');
		}
	});
});