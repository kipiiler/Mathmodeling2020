import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import styled from 'styled-components';
import { FaInstagram as FaInstagramSquare, FaFacebookF as FaFacebookSquare, FaGithub } from "react-icons/fa";

const Maincontainer = styled.div`
background:#2C5684;
`
const Row = styled.div`
display:flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-evenly;
`

const Column = styled.div`
display:flex;
flex-flow: column nowrap;
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
width:350px;
height:350px;
border-radius:100%;
border: 2px #F38640 solid;
background:black;
margin:5px;
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

const Membercard = styled.div`
width:300px;
height:400px;
margin:50px;
position:relative;
background:#2C5684;
object-fit:cover;
&:hover > .front{
	transform: perspective(0) rotateY(-180deg);
};
&:hover > .back{
	transform: perspective(0) rotateY(0deg);
};
`

const Membertitle = styled.div`
color: #FFFFFF;
font-style: uppercase;
background:black;
padding-top:20px;
padding-bottom:20px;
font-weight: bold;
position:absolute;
width:100%;
top:75%;
text-align:center`

const Front = styled.div`
transform: perspective(0) rotateY(0deg);
width:100%;
height:100%;
position:absolute;
backface-visibility:hidden;
filter:grayscale(100%);
background:url('https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/116942708_2708240505943072_4613189098958994399_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=wT_YsfjYYc4AX_iHdHV&_nc_ht=scontent.fhan2-1.fna&oh=0ac54c3d02c9c999f77d393b73ba48d7&oe=5F5535A6');
background-position:center;
background-size:cover;
background-repeat:no-repeat;
transition: transform .3s linear;
`

const Back = styled.div`
transform: perspective(0) rotateY(180deg);
width:100%;
height:100%;
background:url('https://cdn.fbsbx.com/v/t59.2708-21/117234182_244721419834586_4566119771619253885_n.gif?_nc_cat=102&_nc_sid=041f46&_nc_ohc=WuBq4SGaxQUAX_d133_&_nc_ht=cdn.fbsbx.com&oh=c72cd871e8d10c103a25d1db272254bf&oe=5F30B2B0');
overflow:hidden;
position:absolute;
backface-visibility:hidden;
transition: transform .6s linear`

const Socialmediacontain = styled.div`
display:flex;
position:absolute;
width:100%;
align-items: center;
justify-content: space-evenly;
top:85%;
`

const Socialmediaitem = styled.a`
color:white;
cursor:pointer;
&:hover{
	transform: scale(2);
};
transition: all .3s ease
`


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
						<Membercard>
							<Front className='front'><Membertitle>aaaaaaaaaaaaaaa</Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
					</Row>
					<Row>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
					</Row>
					<Row>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
						<Membercard>
							<Front className='front'><Membertitle></Membertitle></Front>
							<Back className='back'>
								<Socialmediacontain>
									<Socialmediaitem><FaFacebookSquare /></Socialmediaitem>
									<Socialmediaitem><FaInstagramSquare /></Socialmediaitem>
									<Socialmediaitem><FaGithub /></Socialmediaitem>
								</Socialmediacontain>
							</Back>
						</Membercard>
					</Row>
				</div>
			</Maincontainer>
		</>
	)
}
