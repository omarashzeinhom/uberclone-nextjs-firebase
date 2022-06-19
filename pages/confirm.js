import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MapComp from "../components/Map/MapComp";
import { useEffect, useState } from "react";

const Confirm = () => {

    const [pickupCoordinates , setPickupCoordinates]= useState("");
    const [dropOffCoordinates , setDropOffCoordinates]= useState("");







  //get PickupCoordinates Start
  const getPickUpCoordiantes = () => {
    const location = "Cairo";
    // Fetch Function
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Pick Up Coordinates:" + data.features[0].center);
      });
  };

  //get PickupCoordinates end

  // get DropOffCoordinates Start
  const getDropOffCoordiantes = () => {
    const dropoff = "Alexandria";
    // Fetch Function
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Drop Off Coordinates:" + data.features[0].center);
      });
  };
  // get DropOffCoordinates End

  //call functions with useEffect
  useEffect(() => {
    getPickUpCoordiantes();
    getDropOffCoordiantes();
  }, []);

  return (
    <Wrapper>
      <MapComp />
      <RideContainer>
        {/**Ride Selector */}

        {/**Confirm Buttons */}
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen  
`;

const RideContainer = tw.div`flex-1`;
