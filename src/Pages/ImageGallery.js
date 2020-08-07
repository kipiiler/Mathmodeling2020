import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'

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
      <Parallax horizontal pages={3} style={{ backgroundColor: '#87BCDE', height: '30vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2016 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#87BCDE', height: '30vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2017 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#87BCDE', height: '30vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2018 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#87BCDE', height: '30vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ 2019 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#87BCDE', height: '30vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ first Meeting 2020 /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#87BCDE', height: '30vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'blue' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
      <Eventtext>/ Info session /</Eventtext>
      <Parallax horizontal pages={3} style={{ backgroundColor: '#87BCDE', height: '30vh', position: 'static', display: 'block' }}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      </Parallax>
    </div >
  )
}


