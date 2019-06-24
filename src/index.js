const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1heWFlYSIsImEiOiJjanhhazA1cjgxNzdwM29xYnhqcW9uMjltIn0.nEQUlsoYThdiSPeH-34GYQ';

const map = new mapboxgl.Map({
    container: "map",
    center: [-87.6354, 41.8885], 
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
  });

const marker = buildMarker("activities", [-87.6354, 41.8885]);
marker.addTo(map);
