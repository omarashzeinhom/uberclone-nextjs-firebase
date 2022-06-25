import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const login = () => {
  return (
    <Wrapper>
        <LoginImageContainer>
            <LoginIcon
                src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg"
                />
            <LoginBannerImage
 src={
    "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1656174907/FIXITAPP/ionic-app-images/Login%20and%20get%20started/undraw_under_construction_-46-pa_1_zkz0vc.svg"
  }            />
        </LoginImageContainer>
      Login
      <SignInButton>Sign in with google</SignInButton>
    </Wrapper>
  );
};

export default login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200`;

const LoginImageContainer = tw.div``;

const LoginBannerImage = tw.img``;

const LoginIcon = tw.img``;

const SignInButton = tw.button`bg-green-500 text-white text-center py-4 mt-8 selfcenter w-full `;
