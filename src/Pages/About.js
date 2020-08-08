import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import styled from 'styled-components';
import { FaInstagramSquare, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { findByDisplayValue } from '@testing-library/react';

const Maincontainer = styled.div`
background:#2C5684;
`
const Row = styled.div`
display:flex;
flex-flow: row;
align-items: center;
justify-content: space-evenly;
`

const Column = styled.div`
display:flex;
flex-flow: column;
align-items: center;
justify-content: space-evenly;
`

const Heading = styled.div`
color: #FFFFFF;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 35px;
width:100%;
text-align:center;
padding-top:30px;
padding-bottom:30px;
`

const FounderCard = styled.div`
width:35vh;
height:35vh;
border-radius:100%;
border: 2px #F38640 solid;
background:black;
margin:5px
`
const HRBar = styled.hr`
margin:0px;
border: .5px solid white;
margin: auto;
margin-top:30px;
margin-bottom:20px;
width:90%;
`

const Foundertitle = styled.div`
color: #FFFFFF;
font-style: normal;
font-weight: bold;
font-size:25px;
padding-top:10px;
width:40vh;
text-align:center;`

const Membercard = styled.div``

const Membertitle = styled.div``

const Front = styled.div``

const Back = styled.div``

const Socialmediacontain = styled.div``

const Socialmediaitem = styled.div``


function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef()

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
			onClick={(e) => setActive(!active)}
			onPointerOver={(e) => setHover(true)}
			onPointerOut={(e) => setHover(false)}>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial wireframe attach="material" color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}
export default function () {
	return (
		<>
			<Canvas style={{ background: 'grey' }}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
			<Maincontainer>
				<HRBar />
				<Heading>FOUNDER</Heading>
				<Row>
					<Column>
						<FounderCard></FounderCard>
						<Foundertitle>aaaa</Foundertitle>
					</Column>
					<Column>
						<FounderCard></FounderCard>
						<Foundertitle>aaaaaaaa</Foundertitle>
					</Column>
					<Column>
						<FounderCard></FounderCard>
						<Foundertitle>aaaaaaa</Foundertitle>
					</Column>
				</Row>
				<HRBar />
				<Heading>OUR TEAM</Heading>
				<div>
					<Row>
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
					</Row>
					<Row>
						<div>5</div>
						<div>6</div>
						<div>7</div>
						<div>8</div>
					</Row>
					<Row>
						<div>9</div>
						<div>10</div>
						<div></div>
						<div></div>
					</Row>
				</div>
			</Maincontainer>
		</>
	)
}
