import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MapComp from "../components/Map/MapComp";
import { useEffect } from "react";

const Confirm = () => {
  const getCoordiantes = () => {
    const location = "Cairo";
    // Fetch Function
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  //call function with useEffect

  useEffect(() => {
    getCoordiantes();
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
