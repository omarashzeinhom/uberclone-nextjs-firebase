import React, { useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components/dist/tailwind";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
//from Firebase.js file in root folder

import { auth, provider } from "../firebase";

const Login = () => {
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
        <LoginIcon src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1656556783/UBERCLONE%20APP/Black_Gold_Luxury_Jewelry_Logo_uerwjw.png" />
        <LoginBannerImage
          src={
            "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1656556781/UBERCLONE%20APP/undraw_electric_car_b-7-hl_uiuqju.svg"
          }
        />
      </LoginImageContainer>
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200`;

const Title = tw.div`bg-green-400 w-full py-3 text-center text-white mb-4 text-5xl pt-5 text-gray-500`;

const LoginImageContainer = tw.div`flex flex-col `;

const LoginBannerImage = tw.img`w-full h-40`;

const LoginIcon = tw.img`h-12 w-12 rounded-full object-contain selfcenter`;

const SignInButton = tw.button`bg-green-500 text-white text-center py-4 mt-8 selfcenter w-full `;
