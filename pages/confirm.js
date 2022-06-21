import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MapComp from "../components/Map/MapComp";
import { useEffect, useState } from "react";
//imports for built in functions from next
import Link from "next/link";
import { useRouter } from "next/router";
//
import WorkerSelector from "../components/WorkerSelector/WorkerSelector";
const Confirm = () => {
  //router built in function from next/router
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  // debug pickup and drop off
  //console.log("PickUp:", pickup);
  //console.log("DropOff:", dropoff);

  //useState
  const [pickupCoordinates, setPickupCoordinates] = useState("");
  const [dropOffCoordinates, setDropOffCoordinates] = useState("");

  //get PickupCoordinates Start
  const getPickUpCoordiantes = (pickup) => {
    // Fetch Function
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  //debug useState
  //console.log(pickupCoordinates, dropOffCoordinates);

  //get PickupCoordinates end

  // get DropOffCoordinates Start
  const getDropOffCoordiantes = (dropoff) => {
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
        setDropOffCoordinates(data.features[0].center);
      });
  };
  // get DropOffCoordinates End

  //call functions with useEffect
  useEffect(() => {
    getPickUpCoordiantes(pickup);
    getDropOffCoordiantes(dropoff);
  }, [pickup, dropoff]);
  //
  return (
    <Wrapper>
      <ConfirmHeader>
        <h1>Confirm </h1>
      </ConfirmHeader>
      <Link href="/search">
        <BackButton src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655630172/FIXITAPP/nextjs-app-images/search/back-svgrepo-com_s3toio.svg" />
      </Link>
      <MapComp
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <WorkerContainer>
        {/**Worker Selector Component */}
        <WorkerSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Worker Reservation</ConfirmButton>
        </ConfirmButtonContainer>
        {/**Confirm Buttons */}
      </WorkerContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen  
`;

const WorkerContainer = tw.div`flex flex-col flex-1 `;

const BackButton = tw.img`
 w-12 h-12 rounded-full cursor-pointer`;

const ConfirmHeader = tw.div`text-center text-xl`;

const ConfirmButtonContainer = tw.div`border-t-2`;

const ConfirmButton = tw.div` my-4 mx-4 py-4 text-center rounded bg-emerald-400`;
