import { useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import tw from "tailwind-styled-components";
// Router for next.js

mapboxgl.accessToken =
  "pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw";

const MapComp = (props) => {

  //debug props
  //console.log(props);




  //display map with use effect
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style:
        "mapbox://styles/omarashzeinhom/cl4k5qsqz000z14s7wqbpzlqv?optimize=true",
      center: [26.8206, 30.8025],
      zoom: 3,
    });
    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }
    if (props.pickupCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.dropOffCoordinates, props.pickupCoordinates, {}], {
        padding: 50,
      });
    }
  }, [props.pickupCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    // Set marker options.
    const marker = new mapboxgl.Marker({
      color: "#568203",
      draggable: true,
    })
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default MapComp;

const Wrapper = tw.div`
flex-1
`;
