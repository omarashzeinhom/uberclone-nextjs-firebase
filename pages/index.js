import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import MapComp from "../components/MapComp";


 
mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmFzaHplaW5ob20iLCJhIjoiY2w0YndzY2pjMWF1bjNjcnlqbDI1OW56YSJ9.kfQVlZWIi3vTQoPvBB8SUw';



export default function Home() {


  return (
    <Wrapper>
      <Map id="map"><MapComp/></Map>
      <ActionItems>Start</ActionItems>
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
