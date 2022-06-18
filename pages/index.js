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
            src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655577502/FIXITAPP/nextjs-app-images/header/fix__it__header__logo_daikqr.svg"
          />
          <Profile>
            <Name>Omar AbdELRahman</Name>
            <UserImg src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1655579775/FIXITAPP/nextjs-app-images/header/pp_home_removedbg_g5eq7r_hp8ikc.webp" />
          </Profile>
        </Header>
        {/**Action Btns */}
        {/** */}
      </ActionItems>
    </Wrapper>
  );
}

// in tail wind css you define the css3 const with tick marks not quotation
const Wrapper = tw.div`
flex flex-col bg-white-500 h-screen
`;

const ActionItems = tw.div`
bg-sky-700 h-screen flex-1
`;

const Map = tw.div`
bg-gray-400 flex-1
`;

const Header = tw.div`
font-white-500
`;

const FixitLogo = tw.img`
max-w-full h-auto transition-shadow rounded-sm
`;

const Profile = tw.div`
`;

const Name = tw.div``;

const UserImg = tw.img`
rounded-full w-32
`;
