 // In the following example, markers appear when the user clicks on the map.
 // Each marker is labeled with a single alphabetical character.
 var labels = 'Biz';
 var labelIndex = 0;

 function initialize() {
   var bangalore = {
     lat: 35.691948, 
     lng: 139.718789
   };
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 16,
     center: bangalore
   });

   // This event listener calls addMarker() when the map is clicked.
   google.maps.event.addListener(map, 'click', function (event) {
    //  addMarker(event.latLng, map);
   });

   // Add a marker at the center of the map.
   addMarker(bangalore, map);
 }

 // Adds a marker to the map.
 function addMarker(location, map) {
   // Add the marker at the clicked location, and add the next-available label
   // from the array of alphabetical characters.
   var marker = new google.maps.Marker({
     position: location,
    //  label: labels[labelIndex++ % labels.length],
    label: labels,
     map: map
   });
 }

 google.maps.event.addDomListener(window, 'load', initialize);