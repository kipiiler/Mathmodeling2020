import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'

import BlueHapor from "../images/Deco/Bluehapor.png";
import Bluesea from "../images/Deco/BlueSea.png";
import Blueship from "../images/Deco/Blueship.png";
import Bluestar from "../images/Deco/Bluestar.png";

import Browland from "../images/Deco/Browland.png";
import Browncow from "../images/Deco/Browncow.png";
import BrownDust from "../images/Deco/BrownDust.png";
import BrownMount from "../images/Deco/BrownMount.png";
import BrownRocl from "../images/Deco/BrownRocl.png";

import GreenRock from "../images/Deco/Green Rock.png";
import Greenbubble from "../images/Deco/Greenbubble.png";
import Greenseaweed from "../images/Deco/Greenseaweed.png";
import Greensub from "../images/Deco/Greensub.png";

import Purplant from "../images/Deco/Purplant.png";
import Pursatelite from "../images/Deco/Pursatelite.png";
import Purstar from "../images/Deco/Purstar.png";

import Reddrill from "../images/Deco/Reddrill.png";
import Redddust from "../images/Deco/Reddusk.png";
import Redrod from "../images/Deco/Redrod.png";

import Yellowbird from "../images/Deco/yellowbird.png";
import Yellowbuilding from "../images/Deco/yellowbuilding.png";
import Yellowheli from "../images/Deco/yellowheli.png";
import Yellowpole from "../images/Deco/yellowpole.png";
import Yellowskycraper from "../images/Deco/Yellowskycraper.png";
import Yellowsun from "../images/Deco/yellowsun.png";

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Eventtext = styled.div`
color: white;
letter-spacing: -0.05em;
text-transform: lowercase;
width:auto;
padding-top:30px;
padding-bottom:10px;
padding-right:5vh;
font-weight: 100;
font-size: 20px;
color: #FFFFFf;
text-align:right;
background-color: #2C5684;
font-family: 'Be Vietnam', sans-serif;
`
export default function Image() {
  return (
    <div>
      <Eventtext style={{ paddingTop: '95px' }}>/ 2015 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#FEEA98', height: '50vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={0} speed={0} style={{ pointerEvents: 'none' }}>
          <img src={Yellowbird} style={{ width: '15%', marginLeft: '10%', marginTop: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.5} style={{ pointerEvents: 'none' }}>
          <img src={Yellowbird} style={{ width: '30%', marginLeft: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} style={{ pointerEvents: 'none' }}>
          <img src={Yellowbird} style={{ width: '10%', marginTop: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={Yellowheli} style={{ width: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={-.6} style={{ pointerEvents: 'none' }}>
          <img src={Yellowsun} style={{ width: '5%', marginTop: '100px' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={-0.3} style={{ bottom: '0px' }}>
          <img src={Yellowpole} style={{ width: '10%', marginTop: 'auto', marginBottom: 'auto' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.5} style={{ pointerEvents: 'none' }}>
          <img src={Yellowbuilding} style={{ width: '15%', marginTop: '100px' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.45} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={Yellowskycraper} style={{ width: '15%', }} />
        </ParallaxLayer>
      </Parallax>
      <Eventtext>/ 2016 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#EA5C65', height: '50vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#EA5C65' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#EA5C65' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2017 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#74C58E', height: '50vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#74C58E' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#74C58E' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2018 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#5A3E63', height: '50vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#5A3E63' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#5A3E63' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2019 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#F89E5A', height: '50vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#F89E5A' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#F89E5A' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2020 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#12436E', height: '50vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '12436E' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#12436E' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
    </div >
  )
}


