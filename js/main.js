
// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
    $( ".bk-extendednavigation" ).toggleClass( "open" );
});


// Toggles class open to display/hide folders
$( ".navigation-item.folder" ).each(function() {
    $( this ).click(function() {
        $( this ).toggleClass( "open" );
    });
});


// Set a data attribute that matches the content of the nav item
var link = document.querySelectorAll('.item-name');
for (i = 0; i < link.length; i++) { 
    link[i].setAttribute("data-hover", link[i].innerHTML);
}


// Feature parralax fade effect
var scrollEffect = function (elem) {

    // How high the window is
    var window_height = window.innerHeight;

    // Apply styles as user scrolls
    elem.setAttribute(
        "style", "opacity:" + Math.max(0, parseFloat(1-(1/window_height*window.pageYOffset)).toFixed(2)) + "; -webkit-transform: translateY(" + window.pageYOffset + "px)"
    );

};

var elem = document.querySelector('.content-wrap');

window.onscroll = function(e) {
    scrollEffect(elem);
};

