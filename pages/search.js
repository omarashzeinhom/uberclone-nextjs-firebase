import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";

const search = () => {
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
      {/**Saved Places */}
      {/**Confirm Location */}
      <InputButton>Where to?</InputButton>
      <InputButton>Where to?</InputButton>
    </Wrapper>
  );
};

export default search;

const Wrapper = tw.div`
 bg-gray-100 h-screen 
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img` w-12 h-12 rounded-full`;

const InputButton = tw.div`

h-20 bg-gray-200 p-4 rounded text-2x1 flex items-center mt-8
`;
