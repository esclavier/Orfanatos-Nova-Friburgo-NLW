const map = L.map("mapid").setView([-22.2325699, -42.5216726], 15.88);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZGVybGltYWNoYWRvIiwiYSI6ImNrZzhqZndwNzBod2YzMHBnNnpzY204OW0ifQ.KahS8uNyC9OkV4ZHJi1sTg",
  }
).addTo(map);

const icon = L.icon({
  iconUrl: "../../public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Aldeia da Criança <a href="orphanege.html?id=1" class="choose-orphanege"> <img src="../../public/images/arrow-white.svg"></a>'
);

L.marker([-22.2310804, -42.5207053], { icon }).addTo(map).bindPopup(popup);
