$(document).ready(function (){
	var myLatlng = new google.maps.LatLng(latitude, longitude);

    function initialize() {
			var myLatlng = new google.maps.LatLng(latitude,longitude);

      var mapOptions = {
    	zoom: 15,
    	center: myLatlng,
      scrollwheel: false
      };
      
      var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  animation: google.maps.Animation.DROP
			});
			
      

	    var contentString = '<h2>'+ address + '</h2>' +
    	'<p>' + description + '</p>'

			var infowindow = new google.maps.InfoWindow({
			   content: contentString
			});

			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.open(map,marker);
			});


    	var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);
        
      // var map = new google.maps.Map(document.getElementById('map-canvas'),
      //           mapOptions); 
      marker.setMap(map); 
    }
    

    google.maps.event.addDomListener(window, 'load', initialize);
});


//       google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map,marker);
//   });
// }
