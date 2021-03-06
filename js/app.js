// // hard coded places data
// var data = {
//     places: [
//    {
//        // place data goes here		
//    },
//   {
//       // place data goes here
//   }
// ]};

// // Place constructor
// var Place = function(data) {
//     //
// };

// // ViewModel
// var YourViewModel = function() {
//     // call the Place constructor here
// };

// Hard coded locations data
var markers = [
	{
	"title": 'Totto Ramen',
	"lat": '40.764777',
	"lng": '-73.987641',
	"description": 'Bustling Japanese noodle specialist with sit-down dining not far from its original storefront.'
	},
	{
	"title": 'Lincoln Center for the Performing Arts',
	"lat": '40.772874',
	"lng": '-73.983479',
	"description": 'Multi-venue complex home to many prominent groups like Metropolitan Opera & New York City Ballet.'
	}
];

window.onload = function () {
	LoadMap();
}

function LoadMap() {
	var mapOptions = {
		center: new google.maps.LatLng(40.767513, -73.985109),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
 
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	//Create and open InfoWindow.
	var infoWindow = new google.maps.InfoWindow();

	for (var i = 0; i < markers.length; i++) {
		var data = markers[i];
		var myLatlng = new google.maps.LatLng(data.lat, data.lng);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: data.title
		});

		//Attach click event to the marker.
		(function (marker, data) {
			google.maps.event.addListener(marker, "click", function (e) {
			//Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
			infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
			infoWindow.open(map, marker);
			});
		})(marker, data);
	}
}
