import { useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import tw from "tailwind-styled-components";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw";

const MapComp = (props) => {
console.log(props);
  const addToMap = (map) => {
    // Set marker options.
    const marker = new mapboxgl.Marker({
      color: "#568203",
      draggable: true,
    })
      .setLngLat([26.8206, 30.8025])
      .addTo(map);
}


  //display map with use effect
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style:
        "mapbox://styles/omarashzeinhom/cl4k5qsqz000z14s7wqbpzlqv?optimize=true",
      center: [26.8206, 30.8025],
      zoom: 3,
    });
    addToMap(map)

  });
  useEffect(()=>{
    console.log(props.pickupCoordinates)
    }, [])
    



  return <Wrapper id="map"></Wrapper>;
};

export default MapComp;

const Wrapper = tw.div`
flex-1
`;
