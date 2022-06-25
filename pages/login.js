import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const login = () => {
  return (
    <Wrapper>
      Login
      <SignInButton>Sign in with google</SignInButton>
    </Wrapper>
  );
};

export default login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200`;

const SignInButton = tw.button`bg-green-500 text-white text-center py-4 mt-8 selfcenter w-full `;
