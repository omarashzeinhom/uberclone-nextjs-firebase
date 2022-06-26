import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//
import { useEffect, useState } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
///
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import MapComp from "../components/Map/MapComp";
import { useRouter } from "next/router";
//FIREBASE
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map id="map">
        <MapComp />
      </Map>
      <ActionItems>
        {/**Header */}
        <Header>
          <img
            width="150"
            heigh="150"
            loading="lazy"
            src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577502/FIXITAPP/nextjs-app-images/header/fix__it__header__logo_daikqr.svg"
          />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImg
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        {/**Action Btns */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585748/FIXITAPP/nextjs-app-images/ActionButtonImages/woker-avatar-male_mieyjc.svg" />
              <h5> Worker</h5>
            </ActionButton>
          </Link>

          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585697/FIXITAPP/nextjs-app-images/ActionButtonImages/worker-tool-search_au8m9f.svg" />
              <h5>Profession </h5>
            </ActionButton>
          </Link>

          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655623254/FIXITAPP/nextjs-app-images/ActionButtonImages/clock-svgrepo-com_b913bl.svg" />
              <h5>Reserve </h5>
            </ActionButton>
          </Link>
        </ActionButtons>
        {/** */}
        <Link href="/search">
          <InputButton>Where to?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}

// in tail wind css you define the css3 const with tick marks not quotation
const Wrapper = tw.div`
flex flex-col bg-white-500 h-screen text-center
`;

const ActionItems = tw.div`
bg-white  flex-1 p-4
`;

const Map = tw.div`
bg-gray-400 flex-1
`;

const Header = tw.div`
flex justify-between items-center
`;

const FixitLogo = tw.img`
max-w-full h-auto transition-shadow rounded-sm
`;

const Profile = tw.div`
flex
`;

const Name = tw.div`
mr-5 w-20 text-sm
`;

const UserImg = tw.img`
rounded-full w-15 h-12 mb-4 border border-gray-200 bg-stone-500/75 hover:bg-stone-600 p-px cursor-pointer
`;

const ActionButtons = tw.div`
flex cursor-pointer
`;

const ActionButton = tw.div`
flex flex-1  flex-col  rounded-lg bg-gray-400  m-3 h-32 items-center  justify-center transform hover:scale-105 transition text-xl`;

const ActionButtonImage = tw.img` h-3/5`;

const InputButton = tw.div`

h-20 bg-gray-200 p-4 rounded text-2x1 flex items-center mt-8 cursor-pointer
`;
