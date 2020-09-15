import React, { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import Cup from '../images/demo.glb';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, softShadows } from 'drei';
import styled from 'styled-components';
import { FaInstagram as FaInstagramSquare, FaFacebookF as FaFacebookSquare, FaEnvelope } from "react-icons/fa";

import Tapthe from '../images/tapthe.JPG';
import Meme from '../images/Concept.jpg';

import AnhKien from '../images/Founder/Anh Kiên.jpg';
import AnhPhuc from '../images/Founder/Anh Phúc.jpeg';
import ChiPhuongAnh from '../images/Founder/Chị Phương Anh.jpg';
import ChiTong from '../images/Founder/ChiTong-167.jpg'

import NgocHai from '../images/Member/Img/Ngoc_Hai.jpg';
import NgocDiep from '../images/Member/Img/Ngoc_Diep.JPG';
import TienDung from '../images/Member/Img/Tien_Dung.jpg';
import DangDuy from '../images/Member/Img/Dang_Duy.jpg';
import VietAnh from '../images/Member/Img/Viet_Anh.jpg';
import HaThu from '../images/Member/Img/Ha_Thu.JPG';
import DoanHoang from '../images/Member/Img/Doan_Hoang.JPG';
import YenNhi from '../images/Member/Img/Yen_Nhi.JPG';
import LeHuyen from '../images/Member/Img/Le_Huyen.jpg';
import ThanhTam from '../images/Member/Img/Ngoc_Hai.jpg';


import NgocHaigif from '../images/Member/Gif/Ngoc_Hai.gif';
import NgocDiepgif from '../images/Member/Gif/Ngoc_Diep.gif';
import TienDunggif from '../images/Member/Gif/Tien_Dung.gif';
import DangDuygif from '../images/Member/Gif/Ngoc_Hai.gif';
import VietAnhgif from '../images/Member/Gif/Viet_Anh.gif';
import HaThugif from '../images/Member/Gif/Ha_Thu.gif';
import DoanHoanggif from '../images/Member/Gif/Doan_Hoang.gif';
import YenNhigif from '../images/Member/Gif/Yen_Nhi.gif';
import ThanhTamgif from '../images/Member/Gif/Tam_Ta.gif';
import LeHuyengif from '../images/Member/Gif/Le_Huyen.gif';



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
margin-top: 30px;
font-weight: bold;
font-size:25px;
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
		mesh.current.rotation.y += 0;
		mesh.current.rotation.x = -.1;
	})
	const { nodes, materials } = useLoader(GLTFLoader, Cup);
	const entries = Object.entries(materials)
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
filter:grayscale(0%);
background-position:center;
background-size:cover;
background-repeat:no-repeat;
transition: transform .3s linear;
`

const Back = styled.div`
transform: perspective(0) rotateY(180deg);
width:100%;
height:100%;
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
display:flex;
justify-content:center;
align-items: center;
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
const Box2inside = styled.div`
font-family: Roboto;
font-size: 20px;
width: 75%;
padding: 50px;
text-align: center;
color: #FFFFFF;
border: 5px solid #FFFFFF;
font-weight: bold;
@media only screen and (max-width: 600px) {
	width:75%;
	border:none;
}
`
const Memberdata = [{
	name: "Nguyễn Ngọc Hải",
	title: "Trưởng ban tổ chức",
	img: NgocHai,
	gif: NgocHaigif,
	facebooklink: "http://fb.com/hai.nguyenngoc.129794",
	instargramlink: "https://www.instagram.com/ynwaelnino/?hl=vi",
	gmaillink: "mailto:haibeo2552001@gmail.com",
},
{
	name: "Nguyễn Tiến Dũng",
	title: "Trưởng ban Chuyên Môn",
	img: TienDung,
	gif: TienDunggif,
	facebooklink: "http://fb.com/dung.richard",
	instargramlink: "https://www.instagram.com/_nguyentien.dung_/?hl=en",
	gmaillink: "mailto:dung.nt170062@sis.hust.edu.vn",
}, {
	name: "Tạ Thị Thanh Tâm",
	title: "Trưởng ban Truyền Thông",
	img: ThanhTam,
	gif: ThanhTamgif,
	facebooklink: "https://www.facebook.com/profile.php?id=100008730078967",
	instargramlink: "https://www.instagram.com/thanhtam.2412/",
	gmaillink: "mailto:tathithanhtam241201@gmail.com",
}, {
	name: "Lê Thị Khánh Huyền",
	title: "Trưởng ban Truyền Thông",
	img: LeHuyen,
	gif: LeHuyengif,
	facebooklink: "https://www.facebook.com/profile.php",
	instargramlink: "https://www.instagram.com/lee_ashleyyyy/?fbclid=IwAR0FsLLq7DiYEflIw_PxLhQSdz07abvtrtqWco2o47hQdtS_-REfoQZH72o",
	gmaillink: "mailto:oshlead@gmail.com",
}, {
	name: "Trần Thị Thu Hà",
	title: "Trưởng ban Đạo Diễn - Hậu Cần",
	img: HaThu,
	gif: HaThugif,
	facebooklink: "https://www.facebook.com/ha.thu.0704",
	instargramlink: "https://www.instagram.com/hathu0704/?hl=vi",
	gmaillink: "mailto:hathu070401@gmail.com",
}, {
	name: "Nguyễn Doãn Hoàng",
	title: "Phó ban Đạo Diễn - Hậu Cần",
	img: DoanHoang,
	gif: DoanHoanggif,
	facebooklink: "https://www.facebook.com/kipiiler",
	instargramlink: "https://www.instagram.com/bucc_._/?hl=vi",
	gmaillink: "mailto:hoanghohohaha@gmail.com",
}, {
	name: "Nguyễn Ngọc Diệp",
	title: "Phó ban tổ chức - trưởng ban Media",
	img: NgocDiep,
	gif: NgocDiepgif,
	facebooklink: "http://fb.com/diepngocnguyen812",
	instargramlink: "",
	gmaillink: "mailto:",
}, {
	name: "Phạm Đăng Duy",
	title: "Trưởng ban Media",
	img: DangDuy,
	gif: DangDuygif,
	facebooklink: "http://fb.com/duy.pham.180930",
	instargramlink: "",
	gmaillink: "mailto:phamduysmart@gmail.com ",
}, {
	name: "Đặng Yến Nhi",
	title: "Trưởng ban Tài Chính",
	img: YenNhi,
	gif: YenNhigif,
	facebooklink: "https://www.facebook.com/yennhi.dang.967",
	instargramlink: "https://www.instagram.com/hi_yennhii/?hl=en",
	gmaillink: "mailto:dangyennhi2003@gmail.com",
},
{
	name: "Nguyễn Hà Việt Anh",
	title: "Trưởng ban CTV",
	img: VietAnh,
	gif: VietAnhgif,
	facebooklink: "http://fb.com/vanh.nguyen.180930",
	instargramlink: "",
	gmaillink: "mailto:vanhnguyen0402@gmail.com",
}
]

function MembercardDisplay() {
	let membercard = []
	for (let k = 0; k < Memberdata.length; k++) {
		console.log(Memberdata[k]);
		membercard = [...membercard, <Membercard key={k}>
			<Front className='front' style={{
				background: `url("${Memberdata[k].img}")`, backgroundPosition: 'center',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat'
			}}><Membertitle>{Memberdata[k].name}<br /> {Memberdata[k].title}</Membertitle></Front>
			<Back className='back' style={{
				background: `url("${Memberdata[k].gif}")`, backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}>
				<Socialmediacontain>
					<Socialmediaitem href={Memberdata[k].facebooklink}><FaFacebookSquare /></Socialmediaitem>
					<Socialmediaitem href={Memberdata[k].instargramlink}><FaInstagramSquare /></Socialmediaitem>
					<Socialmediaitem href={Memberdata[k].gmaillink}><FaEnvelope /></Socialmediaitem>
				</Socialmediacontain>
			</Back>
		</Membercard >]
	};

	return membercard
}
MembercardDisplay();

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
							<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 3.5} maxAzimuthAngle={Math.PI / 7} />
							<Suspense fallback={<Loading />}>
								<Trophy rotation={[0, 0, 2]} />
							</Suspense>
						</Canvas>
					</Cupdisplaymo>
					<Cupbox>
						<Box2inside>
							Trải qua 5 năm tổ chức, Toán Mô hình đã tổ chức thành công 5 mùa với tổng cộng hơn 600 thí sinh tham gia đến từ mọi miền tổ quốc. Chưa dừng lại ở đó, Toán Mô hình cũng đã tổ chức thành công nhiều buổi Info Session và những cuộc thi Toán Mô hình Online nhằm giới thiệu bộ môn Toán Mô hình tới các bạn học sinh THPT trên địa bàn cả nước. Sự phản hồi tích cực từ học sinh tăng dần đã làm tăng yêu cầu về chất lượng và quy mô của chương trình.
							</Box2inside>
					</Cupbox>
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
				<Row>
					<MembercardDisplay></MembercardDisplay>
				</Row>
			</Maincontainer>
		</div>
	)
}
