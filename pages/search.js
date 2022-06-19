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
      <InputContainer>
      <FromToIcons>
<Circle src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655632851/FIXITAPP/nextjs-app-images/search/checkbox-blank-circle-line_uauwe2.svg"/>
<Line src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655633562/FIXITAPP/nextjs-app-images/search/1539792897_qyla5f.svg"/>
<Circle src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655632849/FIXITAPP/nextjs-app-images/search/checkbox-blank-circle-line_1_xub199.svg"/>


      </FromToIcons>
      <InputBoxes>
      
      <InputButton>Where to?</InputButton>
        <InputButton>Where to?</InputButton>
      </InputBoxes>
      
      </InputContainer>
      {/**Saved Places */}
      {/**Confirm Location */}
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
 w-12 h-12 rounded-full`;

const InputContainer = tw.div`
bg-white

`;

const FromToIcons = tw.div`w-10 flex flex-col`;

const Circle = tw.img`h-5 w-5`;

const Line = tw.img`h-12 w-5`;

const InputBoxes = tw.div``;

const InputButton = tw.div`
h-20 bg-gray-200 p-4 rounded text-2x1 flex items-center mt-8
`;

