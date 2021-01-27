var map = L.map("map", { zoomControl: false }).setView([35.6762, 139.6503], 13);
var mapIcon = L.icon({
  iconUrl: "/images/icon-location.svg",
  iconSize: [38, 45], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09], { icon: mapIcon })
  .addTo(map)
  // .bindPopup("Hello, there! ✋")
  .openPopup();
