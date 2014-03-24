/**
 * start to run this function when the document is ready.
 */
$(function() {
	$("#catalog-page").accordion({
		header : "> div > h2",
		heightStyle : "content"
	}).sortable({
		axis : "y",
		handle : "h2",
		stop : function(event, ui) {
			// IE doesn't register the blur when sorting
			// so trigger focusout handlers to remove .ui-state-focus
			ui.item.children("h3").triggerHandler("focusout");
		}
	});
	$(".product-grid").sortable({
		placeholder : ".product-grid li"
	});
	$(".product-grid").disableSelection();
});