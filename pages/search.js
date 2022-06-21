import React,{useState} from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";

const search = () => {
  const [homeAddrrQuery, setHomeAddrQuery] = useState("");
  const [workerAddrrQuery, setWorkerAddrQuery] = useState("");
  console.log(homeAddrrQuery,workerAddrrQuery)

  return (
    <Wrapper>
      {/**Button Container */}
      <ButtonContainer>
        Search
        <Link href="/">
          <BackButton src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655630172/FIXITAPP/nextjs-app-images/search/back-svgrepo-com_s3toio.svg" />
        </Link>
      </ButtonContainer>
      {/**Input Container */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655632851/FIXITAPP/nextjs-app-images/search/checkbox-blank-circle-line_uauwe2.svg" />
          <Line src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655633562/FIXITAPP/nextjs-app-images/search/1539792897_qyla5f.svg" />
          <Circle src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655632849/FIXITAPP/nextjs-app-images/search/checkbox-blank-circle-line_1_xub199.svg" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Your Home Address "
            value={homeAddrrQuery}
            onChange={(event) => setHomeAddrQuery(event.target.value)}
          />
          <Input
            placeholder="Workers Nearest Locations ? "
            value={workerAddrrQuery}
            onChange={(event) => setWorkerAddrQuery(event.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655629896/FIXITAPP/nextjs-app-images/search/add-circle-outline_t5ofgb.svg" />
      </InputContainer>
      {/**Saved Places */}
      <SavedPlaces>
        <StarIcon src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655637058/FIXITAPP/nextjs-app-images/search/rodentia-icons_software-installer-new_hosdk1.svg" />
        Saved Places
      </SavedPlaces>
      {/**Confirm Location */}

      <ConfirmButtonContainer>
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: "Cairo",
              dropoff: "Alexandria",
            },
          }}
        >
          Confirm Locations
        </Link>
      </ConfirmButtonContainer>
    </Wrapper>
  );
};

export default search;

const Wrapper = tw.div`
 bg-gray-500 h-screen 
`;

const ButtonContainer = tw.div`
bg-gray-100 px-4
`;

const BackButton = tw.img`
 w-12 h-12 rounded-full cursor-pointer`;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2

`;

const FromToIcons = tw.div`w-10 flex flex-col`;

const Circle = tw.img`h-5 w-5`;

const Line = tw.img`h-12 w-5`;

const InputBoxes = tw.div`flex flex-col flex-1`;

const Input = tw.input`
h-20 bg-gray-200 p-2 my-2 rounded text-2x1 flex items-center rounded-2 outline-none border-none
`;

const PlusIcon = tw.img`
w-10 h-10 bg-gray-300 rounded-full ml-3 
`;

const SavedPlaces = tw.div` flex items-center px-4 bg-white rounded`;

const StarIcon = tw.img`h-12 w-12 rounded mr-2`;

const ConfirmButtonContainer = tw.div`bg-black text-white text-center mt-2 mx-4 py-3 rounded text-2xl cursor-pointer`;
