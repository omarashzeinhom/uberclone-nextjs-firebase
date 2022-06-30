import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { workerList } from "../../data/workerList";

const WorkerSelector = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [tripTime, setTripTime] = useState(0);
  // 1. pickuppCoordinates
  //2. dropoffCoordinates
  useEffect(() => {
    const pickupdrive = `${pickupCoordinates[0]},${pickupCoordinates[1]}`;
    const dropoffdrive = `${dropOffCoordinates[0]},${dropOffCoordinates[1]}`;
    const acess_token = `?access_token=pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw`;
    const apidirections = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupdrive};${dropoffdrive}${acess_token}`;
    //console.log(`${apidirections}`);
    //get trip time from map box api

    //get trip time from map box api
    //2pickup coordinates and 2 points for the dropoff location [x]
    const tripTime = fetch(`${[apidirections]}`)
      .then((response) => response.json())
      .then((data) => {
        //errorhere duration comes undefined in confirm
        setTripTime(data.routes[0].duration / 100);
      })
      .catch((error) => console.log(error));
    //these are added to the dependency array to show the setTripTime dont remove or it will not be shown
  }, [pickupCoordinates, dropOffCoordinates]);

  return (
    <Wrapper>
      <Title>Workers Options </Title>
      <WorkerOptionsList>
        {workerList.map((worker, index) => (
          <Worker key={index}>
            <WorkerImg src={worker.imgUrl} />
            <WorkerDetails>
              <WorkerService>{worker.service}</WorkerService>
              <WorkerArriveTime>{worker.time}</WorkerArriveTime>
            </WorkerDetails>
            <WorkerPrice>
              {/**toFixed(2) is added to bring numbers tod decimal places */}
              {"$" + (tripTime * worker.multiplier).toFixed(2)}
            </WorkerPrice>
          </Worker>
        ))}
      </WorkerOptionsList>
    </Wrapper>
  );
};

export default WorkerSelector;

const Title = tw.div` text-center text-xs py-2 border-b`;

const Wrapper = tw.div`flex flex-col flex-1 bg-orange-100 overflow-y-scroll`;

const WorkerOptionsList = tw.div` overflow-y-scroll`;

const WorkerDetails = tw.div`flex-1 `;

const Worker = tw.div`flex p-4 items-center`;

const WorkerImg = tw.img`h-14 w-14 rounded-full bg-gray-300 mr-4 p-1 h-full`;

const WorkerPrice = tw.div``;

const WorkerService = tw.div`font-medium`;

const WorkerArriveTime = tw.div`text-xs text-emerald-500`;
