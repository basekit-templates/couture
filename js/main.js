
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






var featureHeight = $(".feature-container").height();
var featurePosition = $(".feature-container").position();
var featureTriggerValue = featureHeight + featurePosition.top;
var window_height = window.innerHeight;
var offsetAmount;

function checkFeatureDimensions() {
    featureHeight = $(".feature-container").height();
    featurePosition = $(".feature-container").position();
    featureTriggerValue = featureHeight + featurePosition.top;
    window_height = window.innerHeight;
}




// Feature parralax fade effect
var scrollEffect = function (elem) {

    // How high the window is

    if ( window.pageYOffset > (featureTriggerValue - window_height)  ) {

        if(featureTriggerValue > window_height) {
            offsetAmount = window.pageYOffset - (featureTriggerValue - window_height);
        }
        else {
            offsetAmount = window.pageYOffset;
        }

        // Apply styles as user scrolls
        elem.setAttribute(
            "style", "opacity:" + Math.max(0, parseFloat(1-(2/window_height*offsetAmount)).toFixed(2)) + "; -webkit-transform: translateY(" + offsetAmount + "px)"
        );
     }

};

var elem = document.querySelector('.content-wrap');


window.onscroll = function(e) {
    scrollEffect(elem);
};

$( window ).resize(function() {
  checkFeatureDimensions();
});

