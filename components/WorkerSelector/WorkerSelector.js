import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const WorkerSelector = () => {
  return (
    <Wrapper>
      <Title>WorkerSelector Options List</Title>

      <WorkerOptionsList>
        <Worker>
          <WorkerImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655851971/FIXITAPP/ionic-app-images/WorkerSelector/painter-svgrepo-com_rvbpbg.svg" />
          <WorkerDetails>
            <WorkerService>Plumber</WorkerService>
            <WorkerArriveTime>15 mins away</WorkerArriveTime>
          </WorkerDetails>
          <WorkerPrice>49.99$</WorkerPrice>
        </Worker>
      </WorkerOptionsList>
    </Wrapper>
  );
};

export default WorkerSelector;

const Title = tw.div`text-white text-center text-xs py-2 border-b`;

const Wrapper = tw.div`flex-1 bg-gray-500`;

const WorkerOptionsList = tw.div``;

const WorkerDetails = tw.div`flex-1 `;

const Worker = tw.div`flex`;

const WorkerImg = tw.img`h-14 w-14 rounded bg-gray-100 mr-4`;

const WorkerPrice = tw.div``;

const WorkerService = tw.div`font-medium`;

const WorkerArriveTime = tw.div`text-xs text-emerald-500`;
