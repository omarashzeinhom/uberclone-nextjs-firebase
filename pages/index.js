import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import MapComp from "../components/Map/MapComp";

export default function Home() {
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
            <Name>Omar AbdELRahman</Name>
            <UserImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655579775/FIXITAPP/nextjs-app-images/header/pp_home_removedbg_g5eq7r_hp8ikc.webp" />
          </Profile>
        </Header>
        {/**Action Btns */}
        <ActionButtons>
          <ActionButton><ActionButtonImage src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585748/FIXITAPP/nextjs-app-images/ActionButtonImages/woker-avatar-male_mieyjc.svg"/><h5>Male Worker</h5></ActionButton>
          <ActionButton><ActionButtonImage src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655585697/FIXITAPP/nextjs-app-images/ActionButtonImages/worker-tool-search_au8m9f.svg"/><h5>Profession </h5></ActionButton>
        </ActionButtons>
        {/** */}
      </ActionItems>
    </Wrapper>
  );
}

// in tail wind css you define the css3 const with tick marks not quotation
const Wrapper = tw.div`
flex flex-col bg-white-500 h-screen text-center
`;

const ActionItems = tw.div`
bg-sky-700  flex-1 p-4
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
rounded-full w-32 h-20 border border-gray-200 bg-stone-500/75 hover:bg-stone-600 p-px
`;

const ActionButtons = tw.div`
flex
`;

const ActionButton = tw.div`
bg-gray-400 rounded-full flex-1 m-1 h-32 w-32 items-center`;


const ActionButtonImage = tw.img`w-full h-3/5`;