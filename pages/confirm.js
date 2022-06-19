import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import MapComp from '../components/Map/MapComp'

const confirm = () => {
  return (
    <Wrapper>
        <MapComp />
Confirm Page
    </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div`
flex h-screen
`;