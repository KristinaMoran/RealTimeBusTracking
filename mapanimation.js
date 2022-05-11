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
  //SBU
  [-73.056659, 40.820138],
  //LIE
  [-73.280783, 40.80476],
  //LIE commack
  [-73.744401, 40.75362],
  //crossisland
  [-73.809437, 40.818903],
  //throgsneck
  [-73.746379, 40.950756],
  //mamaroneck
  [-73.531842, 41.051305],
  //bridgeport
  [-73.200498, 41.167846],
  //new haven
  [-72.916569, 41.296975],
  //waterway
  [-72.352267, 41.318187],
  //stateline of RI
  [-71.796667, 41.442167],
  //providence
  [-71.402848, 41.814628],
  //get on 93
  [-71.134038, 42.204353],
  //braintree
  [-71.023149, 42.233964],
  //boston financial district
  [-71.052256, 42.319501],
  // community college
  [-71.069666, 42.373175],
  //MIT
  [-71.0906, 42.3616],
];

//loop through the nested arrays
let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}
