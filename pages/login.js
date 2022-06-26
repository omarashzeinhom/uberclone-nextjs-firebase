import React, { useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components/dist/tailwind";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
//from Firebase.js file in root folder

import { auth, provider } from "../firebase";

const login = () => {
  //debug router
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
        name: user.displayName;  
        photoUrl: user.photoURL;
      }
    });
  });
  return (
    <Wrapper>
      <Title>Login</Title>
      <LoginImageContainer>
        <LoginIcon src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577547/FIXITAPP/ionic-app-images/header/fix__it__header__logo_t8mpen.svg" />
        <LoginBannerImage
          src={
            "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1656174907/FIXITAPP/ionic-app-images/Login%20and%20get%20started/undraw_under_construction_-46-pa_1_zkz0vc.svg"
          }
        />
      </LoginImageContainer>
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with google
      </SignInButton>
    </Wrapper>
  );
};

export default login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200`;

const Title = tw.div`bg-green-400 w-full py-3 text-center text-white mb-4 text-5xl pt-5 text-gray-500`;

const LoginImageContainer = tw.div`flex flex-col `;

const LoginBannerImage = tw.img`w-full h-40`;

const LoginIcon = tw.img`h-32 w-32 rounded object-contain self-start`;

const SignInButton = tw.button`bg-green-500 text-white text-center py-4 mt-8 selfcenter w-full `;
