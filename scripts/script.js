var map;

            function initialize() {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 12,
                    center: new google.maps.LatLng(48.110230, 11.715810),
                    styles: [
  {
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "elementType": "labels",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 4 }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "color": "#6E6464" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "visibility": "on" },
      { "color": "#463C3C" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#383030" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "color": "#383030" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "color": "#383030" },
      { "lightness": -26 }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "elementType": "labels",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "stylers": [
      { "color": "#463C3C" },
      { "lightness": -34 }
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry"  }
]
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
