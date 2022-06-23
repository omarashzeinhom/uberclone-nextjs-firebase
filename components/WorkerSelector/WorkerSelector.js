import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { workerList } from "../../data/workerList";

const WorkerSelector = () => {
  return (
    <Wrapper>
      <Title>WorkerSelector Options List</Title>

      <WorkerOptionsList>
        {workerList.map((worker, index) => (
          <Worker key={index}>
            <WorkerImg src={worker.imgUrl} />
            <WorkerDetails>
              <WorkerService>{worker.service}</WorkerService>
              <WorkerArriveTime>15 mins away</WorkerArriveTime>
            </WorkerDetails>
            <WorkerPrice>49.99$</WorkerPrice>
          </Worker>
        ))}
      </WorkerOptionsList>
    </Wrapper>
  );
};

export default WorkerSelector;

const Title = tw.div`text-white text-center text-xs py-2 border-b`;

const Wrapper = tw.div`flex flex-col flex-1 bg-orange-100 overflow-y-scroll`;

const WorkerOptionsList = tw.div``;

const WorkerDetails = tw.div`flex-1 `;

const Worker = tw.div`flex p-4 items-center`;

const WorkerImg = tw.img`h-14 w-14 rounded bg-gray-100 mr-4`;

const WorkerPrice = tw.div``;

const WorkerService = tw.div`font-medium`;

const WorkerArriveTime = tw.div`text-xs text-emerald-500`;

//console.log("test")
