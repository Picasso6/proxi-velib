console.log("hello from main_map.js");
var map = L.map('main-map').setView([gon.thp_location.latitude, gon.thp_location.longitude], 16);
 L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',{maxZoom :100}).addTo(map);
 var markers = L.layerGroup();

 thpIcon = L.icon({
      iconUrl: '/assets/THP_logo.png',
      iconSize: [35, 35],
      iconAnchor: [22, 38],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
 });

 var thpMarker = L.marker([gon.thp_location.latitude, gon.thp_location.longitude], {icon: thpIcon})
 var genericMarker =  L.circle([gon.thp_location.latitude, gon.thp_location.longitude] , {radius: 10 , opacity: 1 ,color: "red"} );


 // var myIcon = L.divIcon({className: 'centerMarker'});
 // L.marker([gon.thp_location.latitude, gon.thp_location.longitude], {icon: myIcon}).addTo(map);


 if (thpIcon){
  thpMarker.addTo(map);
 }
 else{
  genericMarker.addTo(map);
 }