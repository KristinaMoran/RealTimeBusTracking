mapboxgl.accessToken =
  "pk.eyJ1Ijoia3Jpc3RpbmFtb3JhbjIyIiwiYSI6ImNsMnl4Z3VvcjE2YW0za281dmRiNmMwamEifQ.P_e7y5SSDnBSXSyc_EMzeQ";

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.99541, 41.767093],
  zoom: 7.5,
});

const marker = new mapboxgl.Marker()
  .setLngLat([-73.124689, 40.914139])
  .addTo(map);
const marker2 = new mapboxgl.Marker().setLngLat([-71.0906, 42.3616]).addTo(map);

const busStops = [
  [-73.056659, 40.820138],
  [-73.280783, 40.80476],
  [-73.744401, 40.75362],
  [-73.809437, 40.818903],
  [-73.786656, 40.908963],
  [-73.746379, 40.950756],
  [-73.699423, 40.976542],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}
