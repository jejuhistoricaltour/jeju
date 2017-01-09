function showPopup(page) {
	var popUp = window.open();	
}

$("area", "map[name='Map']").click(function (event) {
    event.preventDefault();
    
    var href = $(this).attr("href");
    
    // See jQuery Mobile Popup API
    // https://demos.jquerymobile.com/1.2.0/docs/pages/popup/
    
    // Use the following instruction to open the popup where it is defined.
    $(href).popup("open");
    
    // Use the following instraction to emulate a click on the button that opens the popup. This will open the popup on top of that button instead of where it is defined.
    $("a[href='" + href + "']").click();
    
});


$(document).ready(function(){
  $("area[rel^='prettyPhoto']").prettyPhoto();
});