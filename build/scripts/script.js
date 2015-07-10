jQuery(document).ready(function() {
    var allPanels = jQuery('.article-content').hide();

    jQuery('article').click(function() {
        jQuery(this).find('.article-content').toggle();
    });

    jQuery('article h1').click(function() {
        jQuery(this).toggleClass('open');
    });

});




/*
jQuery(document).ready(function() {
    jQuery(".field-name-field-details h1").prependTo(".field-name-field-details");

});

*/
/*
jQuery(document).ready(function() {

    jQuery(".accordion dt").click(function() {
        jQuery(this).next("dd").slideToggle("fast"), jQuery(this).children("span").toggleClass("closed open")
    }), jQuery(".tabs-menu a").click(function(a) {
        a.preventDefault(), jQuery(this).parent().addClass("current"), jQuery(this).parent().siblings().removeClass("current");
        var b = jQuery(this).attr("href");
        jQuery(".tab-content").not(b).css("display", "none"), jQuery(b).fadeIn()
    }), jQuery(".rslides").responsiveSlides(), jQuery("<ul class='tabs-menu'></ul>").prependTo(".field-name-field-infoblock > .field-items"), jQuery(".field-name-field-infoblock .field-items h2 a").clone().prependTo(".tabs-menu"), jQuery(".field-name-field-infoblock .tabs-menu a").wrap("<li></li>"), jQuery(".tabs-menu li:first-of-type").addClass("active"), jQuery(".tabs-menu li:nth-of-type(1) a").attr("href", "#tab-pane-1"), jQuery(".tabs-menu li:nth-of-type(2) a").attr("href", "#tab-pane-2"), jQuery(".tabs-menu li:nth-of-type(3) a").attr("href", "#tab-pane-3"), jQuery(".tabs-menu li:nth-of-type(4) a").attr("href", "#tab-pane-4"), jQuery(".tabs-menu li:nth-of-type(5) a").attr("href", "#tab-pane-5"), jQuery(".tabs-menu li:nth-of-type(6) a").attr("href", "#tab-pane-6"), jQuery(".tabs-menu li:nth-of-type(7) a").attr("href", "#tab-pane-7"), jQuery(".tabs-menu li:nth-of-type(8) a").attr("href", "#tab-pane-8"), jQuery(".tabs-menu li:nth-of-type(9) a").attr("href", "#tab-pane-9"), jQuery(".tabs-menu li:nth-of-type(10) a").attr("href", "#tab-pane-10"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(1) .node-infoblock").attr("id", "tab-pane-1"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(2) .node-infoblock").attr("id", "tab-pane-2"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(3) .node-infoblock").attr("id", "tab-pane-3"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(4) .node-infoblock").attr("id", "tab-pane-4"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(5) .node-infoblock").attr("id", "tab-pane-5"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(6) .node-infoblock").attr("id", "tab-pane-6"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(7) .node-infoblock").attr("id", "tab-pane-7"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(8) .node-infoblock").attr("id", "tab-pane-8"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(9) .node-infoblock").attr("id", "tab-pane-9"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(10) .node-infoblock").attr("id", "tab-pane-10"), jQuery(".field-name-field-infoblock .field-items .field-item:nth-of-type(1) .node-infoblock").addClass("active"), jQuery(".field-name-field-infoblock .tabs-menu li a").click(function(a) {
        a.preventDefault(), jQuery(this).parent().addClass("active"), jQuery(this).parent().siblings().removeClass("active");
        var b = jQuery(this).attr("href");
        jQuery(b).addClass("active"), jQuery(".node-infoblock").not(b).removeClass("active")
    })
}), jQuery(document).ready(function() {
    jQuery(".site-nav-wohnbereiche h2").click(function() {
        jQuery(".site-nav-wohnbereiche ul").slideToggle("fast")
    }), jQuery(".site-nav-produkte h2").click(function() {
        jQuery(".site-nav-produkte ul").slideToggle("fast")
    })
}), jQuery(window).load(function() {
    jQuery(".marquee").marquee({
        duration: 15e3
    })
});*/

var map;

function initialize() {
    var mapOptions = {
        scrollwheel: false,
        zoom: 12,
        center: new google.maps.LatLng(48.112380, 11.715820),
        styles: [{
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "elementType": "labels",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 4
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "color": "#6E6464"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#ffffff"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#463C3C"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#383030"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "color": "#383030"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "color": "#383030"
            }, {
                "lightness": -26
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "stylers": [{
                "color": "#463C3C"
            }, {
                "lightness": -34
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry"
        }]
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var myLatlng = new google.maps.LatLng(48.110230, 11.715810);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

google.maps.visualRefresh = true;



jQuery(document).ready(function() {
jQuery('.tabs-container-1 ul.tabs li').click(function(){
    var tab_id = jQuery(this).attr('data-tab');

    jQuery('.tabs-container-1 ul.tabs li').removeClass('current');
    jQuery('.tabs-container-1 .tab-content').removeClass('current');

    jQuery(this).addClass('current');
    jQuery(".tabs-container-1 #"+tab_id).addClass('current');
  })

jQuery('.tabs-container-2 ul.tabs li').click(function(){
    var tab_id = jQuery(this).attr('data-tab');

    jQuery('.tabs-container-2 ul.tabs li').removeClass('current');
    jQuery('.tabs-container-2 .tab-content').removeClass('current');

    jQuery(this).addClass('current');
    jQuery(".tabs-container-2 #"+tab_id).addClass('current');
  })
});

