/**
 * start to run this function when the document is ready.
 */
$(function(){
	$("#catalog-page").accordion();
	$(".product-grid").sortable({
      placeholder: ".product-grid li"
    });
	$( ".product-grid" ).disableSelection();
});