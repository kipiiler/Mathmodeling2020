import React, { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import Cup from '../images/demo.glb';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, softShadows } from 'drei';
import styled from 'styled-components';
import { FaInstagram as FaInstagramSquare, FaFacebookF as FaFacebookSquare, FaGithub } from "react-icons/fa";

import Tapthe from '../images/tapthe.JPG';
import Meme from '../images/Concept.jpg';

import AnhKien from '../images/Founder/Anh Kiên.jpg';
import AnhPhuc from '../images/Founder/Anh Phúc.jpeg';
import ChiPhuongAnh from '../images/Founder/Chị Phương Anh.jpg';
import ChiTong from '../images/Founder/ChiTong-167.jpg'

const BKimage = styled.div`
background-image:url(${Tapthe});
height: 90vh;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
const Bluecoat = styled.div`
background:rgb(83, 132, 172,.5);
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Block1 = styled.div`
width:90vw;
margin-top: -175px;
margin-bottom:10vh;
margin-left: auto;
margin-right: auto;
height:700px;
background-color: #5384AC;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-flow: row;
@media only screen and (max-width: 600px){
	flex-flow:column;
}
`
const Gioithieutext1 = styled.div`
color: white;
font-style: normal;
font-weight: bold;
font-size:25px;
padding-top:10px;
width:40vw;
text-align:center;
@media only screen and (max-width: 600px){
	flex-flow:row;
	width:80%;
}
`
const Media1 = styled.div`
width:40vw;
height:80%;
background:url(${Meme});
background-repeat: no-repeat;
background-position: center;
background-size: contain;
`

const quoteData = [{
	quote1: `"Tôi không biết thế giới nhìn tôi như thế nào, nhưng đối với tôi, mình dường như chỉ là một đứa bé chơi đùa trên bờ biển: thi thoảng lại chăm chú nhìn vào một hòn sỏi trơn nhẵn hay một vỏ ốc đẹp đẽ hơn bình thường, trong khi đại dương bao la của kiến thức ngay trước mắt mình còn chưa được khám phá."`,
	quote2: `"Không có lời giải tốt nhất, chỉ có lời giải tốt hơn”`,
	quote3: `"Logic sẽ đưa chúng ta từ điểm A đến điểm B. Trí tưởng tượng sẽ đưa chúng ta tới mọi nơi" `,
	quote4: ` “Follow your dream”	`,
}]

softShadows();
const Trophy = () => {
	const mesh = useRef();
	useFrame(() => {
		mesh.current.position.y = -.9;
		mesh.current.rotation.y += 0
		mesh.current.rotation.x += 0
	})
	const { nodes, materials } = useLoader(GLTFLoader, Cup);
	const entries = Object.entries(materials)
	console.log(entries)
	for (var x of entries) {
		//Set glass property to all
		x[1].roughness = 0.3;
		x[1].transparent = true;
		x[1].wireframe = false;
		x[1].transmission = .9;
		x[1].reflectivity = .8;
	}
	//Logo an text reset
	materials.tmh.wireframe = false;
	materials.tmh.transmission = 0;
	materials.tmh.reflectivity = 0;
	materials['Material.003'].reflectivity = 0;
	materials['Material.003'].transmission = 0;
	materials['Material.002'].transmission = 0;
	materials['Material.002'].reflectivity = 0;
	//Mesh color
	materials['Material.005'].color.r = .8;
	materials['Material.005'].color.g = 1;
	materials['Material.005'].color.b = 0;
	materials['Material.004'].color.r = .6;
	materials['Material.004'].color.g = .2;
	materials['Material.004'].color.b = 0;
	materials['Material.006'].color.r = 1;
	materials['Material.006'].color.g = 1;
	materials['Material.006'].color.b = 0;
	materials['Material.007'].color.r = 1;
	materials['Material.007'].color.g = 1;
	materials['Material.007'].color.b = 0;


	return (
		<group ref={mesh} dispose={null}>
			<mesh
				material={materials['Material.004']}
				geometry={nodes.Plane.geometry}
				position={[1.49, -0.16, 0.23]}
				scale={[1.29, 1.65, 1.29]}
			/>
			<mesh
				material={materials['Material.007']}
				geometry={nodes.Torus.geometry}
				position={[0, 0.63, 0.23]}
				scale={[0.39, 0.19, 0.39]}
			/>
			<mesh
				material={materials['Material.006']}
				geometry={nodes.Icosphere.geometry}
				position={[0, 1.02, 0.23]}
				scale={[-0.54, -0.54, -0.54]}
			/>
			<mesh
				material={materials['Material.005']}
				geometry={nodes.Cone.geometry}
				position={[-0.01, 1.4, 0.21]}
				rotation={[0.66, 0.04, 3.12]}
				scale={[1.56, 1.43, 1.47]}
			/>
			<mesh
				material={materials['Material.003']}
				geometry={nodes.Text.geometry}
				position={[0.02, 0.41, 0.72]}
				rotation={[1.33, 0, 0]}
				scale={[0.22, 0.22, 0.22]}
			/>
			<mesh
				material={materials['Material.002']}
				geometry={nodes.Text001.geometry}
				position={[0.01, 1.98, 0.53]}
				rotation={[0.65, 0.02, -0.02]}
				scale={[0.26, 0.26, 0.26]}
			/>
			<mesh
				material={materials.tmh}
				geometry={nodes.tmh.geometry}
				position={[0.01, 0.14, 0.78]}
				rotation={[1.33, 0, 0]}
				scale={[0.21, 0.21, 0.21]}
			/>
		</group>
	)

}
function Loading() {
	return (
		<mesh onClick={(e) => console.log('click')}>
			<ambientLight />
			<spotLight position={[0, 5, 10]} penumbra={1} castShadow />
			<fog attach='fog' args={['white', 10, 20]} />
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<meshPhysicalMaterial attach='material' color='grey' transparent />
		</mesh >
	)
}

const Maincontainer = styled.div`
background:#2C5684;
`
const Row = styled.div`
display:flex;
flex-flow: row wrap;
align-items: center;
justify-content: space-evenly;
@media only screen and (max-width: 600px) {
	flex-flow:column;
}
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
width:250px;
height:250px;
border-radius:100%;
border: 2px #F38640 solid;
margin:5px;
cursor:pointer;
`
const HRBar = styled.hr`
margin:0px;
border: .5px solid white;
margin: auto;
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
background:url('');
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
const Quote = styled.div`
color:white;
width: 80%;
margin:auto;
padding:5vh;
text-align:center;
font-weight:bold;
font-size:5vh;
`
const Cupbox = styled.div`
width:70%;
height:50vh;
background:#2C5684;
@media only screen and (max-width: 600px) {
	width:100%;
}
`
const Cupdisplaymo = styled.div`
width:30%;
height:50vh;
background:#2C5684;
display:block;
@media only screen and (max-width: 600px) {
	width:100%;
}
`


export default function () {

	const [quote, updatequote] = useState(quoteData[0].quote1);
	console.log(quote);

	return (
		<div style={{ background: ' #2C5684' }}>
			<BKimage>
				<Bluecoat>
					<Heading style={{ fontSize: '50px', width: '100%', lineHeight: '50px' }}>Chúng mình là ai?</Heading>
				</Bluecoat>
			</BKimage>
			<Block1>
				<Gioithieutext1>
					lorem aowhio ahoawi aoefihapf aohdio
					lorem aowhio ahoawi aoefihapf aohdio
					lorem aowhio ahoawi aoefihapf aohdio

					lorem aowhio ahoawi aoefihapf aohdio
					lorem aowhio ahoawi aoefihapf aohdio
					lorem aowhio ahoawi aoefihapf aohdio
				</Gioithieutext1>
				<Media1></Media1>
			</Block1>
			<div>
				<Row>
					<Cupdisplaymo>
						<Canvas style={{ display: 'block', height: '50vh', width: '100%', background: `#2C5684`, }} colorManagement shadowMap camera={{ position: [0, 1, 3] }}>
							<ambientLight />
							<spotLight position={[0, 5, 10]} penumbra={1} castShadow />
							<directionalLight
								castShadow
								position={[0, 10, 0]}
								intensity={1.5}
								penumbra={1}
								shadow-mapSize-width={1024}
								shadow-mapSize-height={1024}
								shadow-camera-far={50}
								shadow-camera-left={-10}
								shadow-camera-right={10}
								shadow-camera-top={10}
								shadow-camera-bottom={-10}
							/>
							<OrbitControls />
							<Suspense fallback={<Loading />}>
								<Trophy position />
							</Suspense>

						</Canvas>
					</Cupdisplaymo>
					<Cupbox></Cupbox>

				</Row>
			</div >
			<Maincontainer>
				<HRBar />
				<Heading>FOUNDER</Heading>
				<Row>
					<Column>
						<FounderCard style={{
							background: `url("${AnhPhuc}")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}} onClick={() => updatequote(quoteData[0].quote1)}></FounderCard>
						<Foundertitle>Lê Minh Phúc</Foundertitle>
					</Column>
					<Column>
						<FounderCard style={{
							background: `url("${ChiTong}")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}} onClick={() => updatequote(quoteData[0].quote2)}></FounderCard>
						<Foundertitle>Tống Hiền Chi</Foundertitle>
					</Column>
					<Column>
						<FounderCard style={{
							background: `url("${ChiPhuongAnh}")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}} onClick={() => updatequote(quoteData[0].quote3)}></FounderCard>
						<Foundertitle>Nguyễn Phương Anh</Foundertitle>
					</Column>
					<Column>
						<FounderCard style={{
							background: `url("${AnhKien}")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}} onClick={() => updatequote(quoteData[0].quote4)}></FounderCard>
						<Foundertitle>Lê Trần Kiên</Foundertitle>
					</Column>
				</Row>
				<Quote>{quote}</Quote>
				<HRBar />
				<Heading>OUR TEAM</Heading>
				<div>
					<Row>
						<Membercard>
							<Front className='front'><Membertitle>aaaaaaaaaaaaaaa<br /> aaaaaaa</Membertitle></Front>
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
		</div>
	)
}
