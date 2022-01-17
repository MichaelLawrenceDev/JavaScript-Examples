/* 
Michael Lawrence 
CSS-3351-001
10/29/2021
*/

var lasVegas = {
	latitude: 36.1699,
	longitude: -115.1398
}
var mylocation

window.onload = function() {
	
	/*
	if (location.protocol !== 'https:') {
		alert("No HTTPS, replacing...")
		location.replace(`https:${location.href.substring(location.protocol.length)}`);
		alert("Done, Reloading")
	}
	*/
	
	/* Get location */
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert("Oops, no geolocation support");
	}
	
}

function displayLocation(pos) {
	
	myLocation = pos.coords;
	var infoDiv = document.getElementById("info")
	
	infoDiv.innerHTML += 
		"I am at Latitude " + myLocation.latitude + " and Longitude " + 
		myLocation.longitude + ". But I wish I was in Las Vegas. <br>";
	
	var distance = computeDistance(myLocation, lasVegas)
	
	infoDiv.innerHTML +=
		"I am currently " + distance + " miles away from my destination."
	
	displayDestination()
}

function displayDestination() {
	
	var latLon = new google.maps.LatLng(myLocation.latitude, myLocation.longitude);
	var mapDiv = document.getElementById("map")
	
	var mapOptions = {
		zoom: 11,
		center: latLon,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var map = new google.maps.Map(mapDiv, mapOptions);
	var content = "I would love to tour the Grand Canyon and check out the casinos!"
	addMarker(map, latLon, "Las Vegas", content)
}

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);
	
	var infoWindowOptions = {
		 content: content,
		 position: latlong
	};
	
	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	
	google.maps.event.addListener(marker, "click", function() {
		infoWindow.open(map);
	})
}
