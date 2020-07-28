import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../images/hoem.svg';
import Upevent from '../images/thion.jpg';

import Medal from "../images/huychuong.JPG";

import { BsFillFlagFill, BsFillClockFill } from "react-icons/bs";
import { FaUserFriends, FaRegIdCard, FaMapMarkedAlt, FaQuestion } from "react-icons/fa"


const All = styled.div`
background-color:#2C5684;
`
const Test = styled.div`
height:900px;
background-image:url(${Main});
background-repeat: no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-flow:column no wrap;
`
const Gioithieucontain = styled.div`
margin:auto;
text-align:center;
align-items: center;
transform:translateY(-10%);
`
const ExploreBtn = styled.div`
border: 3px solid #FFFFFF;
box-sizing: border-box;
border-radius: 12px;
margin-top:100%;
padding: 10%;
&:hover{
	transition: .5s ease all;
	background: #2C5684;
	border: 3px solid #2C5684;
	color: #F38640;
}
`
const ExploreText = styled.a`
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 35px;
color: #FFFFFF;
text-decoration:none;
&:hover{
	transition: .5s ease all;
	color: #F38640;
}
`

const Gioithieuheading = styled.div`
color: #FFFFFF;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 35px;`

const Gioithieutext = styled.div`
color: #FFFFFF;
font-style: normal;
font-weight: bold;
padding-top:30px;
line-height: 23px;`

const Upcomingeventbg = styled.div`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${Upevent});
transform: skewY(-4deg);
background-repeat: no-repeat;
background-size:cover;
background-position:center;
height: 500px;
margin-top:3vh;
display:flex;
justify-content:center;
text-align: center;
`

const Upcomingeventbox = styled.div`
transform: skewY(4deg);
display:flex;
flex-flow:column;
justify-content:center;
align-items:space-evenly;
`

const Upeventheadingbox = styled.div`
display: flex;
text-align: center;
flex-flow:column;
`
const Deseventtext = styled.div`
color:white;
padding:5px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display:flex;
justify-content:center;
align-items: center;
`
const DKText = styled.div`
color: #FFFFFF;
background: #2C5684;
border-radius: 100px;
width:initial;
text-decoration:none;
&:hover{
	color: #F38640;
	transition: .5s ease all;
}
text-decoration: none;
width: fit-content;
margin-top:10px;
margin-left: auto;
margin-right:auto;
padding-left: 30px;
padding-right: 30px;
padding-top: 5px;
padding-bottom: 5px;
`
const Achievementcontain = styled.div`
margin-top:100px;
display:flex;
align-items:center;
flex-flow:column;
`
const Achicolucontain = styled.div`
margin-top:50px;
display:flex;
justify-content: space-evenly;
`

const RED = styled.div`
height:150px;
width:150px;
display:flex;
justify-content:center;
align-items:center;
border-radius:100%;
background: #CC3620;
margin-bottom:15px;
`

const BLUE = styled.div`
height:150px;
margin-bottom:15px;
width:150px;
display:flex;
border-radius:100%;
background: #29A1C5;
justify-content:center;
align-items:center;
`

const GREEN = styled.div`
height:150px;
width:150px;
margin-bottom:15px;
display:flex;
border-radius:100%;
justify-content:center;
align-items:center;
background: #259759;
`

const YELLO = styled.div`
height:150px;
width:150px;
margin-bottom:15px;
display:flex;
border-radius:100%;
justify-content:center;
align-items:center;
background: #FFA500;
`

const Achicolu = styled.div`
width:23%;
text-align:center;
display:flex;
flex-flow:column;
align-items:center;
`
const BKimage = styled.div`
background-image:url(${Medal});
height: 400px;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
const SubText = styled.div`
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
height:max-content;
background: #2C5684;
border: 2px solid #FFFFFF;
width:100px;
text-align:center;
border-radius: 100px;
text-decoration:none;
&:hover{
	color: #F38640;
	transition: .5s ease all;
}
`

const Subcontain = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
align-items: baseline;
`

const Subemail = styled.input`
font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid white;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
	}
  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}
&:required,&:invalid { box-shadow:none; }
&:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: white;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right,#FFA500 ,#CC3620);
  border-image-slice: 1;
}

`
const Email = styled.label`
position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
	color: white;`

const Mailfield = styled.div`
position: relative;
padding: 15px 0 0;
margin-top: 10px;
width: 50%;
`
const reviewdata = [
	{
		dot1: "#F38640",
		dot2: "white",
		dot3: "white",
		name: 'Nguyen Tien Dung',
		title: 'Truong Ban Chuyen Mon',
		comment: 'nxet nxetnxetnxetnxet nxet nxet nxet nxet nxetnxet nxet nxet nxet nxet nxetnxet nxet nxet nxet nxet ',
		link: "https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/80617560_1564902187026378_8035853312253231104_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=FPUVyZ65UFcAX-SbyGT&_nc_ht=scontent.fhan2-6.fna&oh=734c5546927caae63943b5690ec05006&oe=5F454FA7"
	},
	{
		dot1: "white",
		dot2: "#F38640",
		dot3: "white",
		name: '2',
		title: '',
		comment: '',
		link: ''
	},
	{
		dot1: "white",
		dot2: "white",
		dot3: "#F38640",
		name: '3',
		title: '',
		comment: '',
		link: ''
	}
]
const ReviewContain = styled.div`
width:70%;
border: 4px solid #FFFFFF;
box-sizing: border-box;
border-radius: 87px;
height:max-content;
margin:auto;
margin-top:50px;
display:flex;
flex-flow:column;
align-items:center;
margin-bottom:50px;
`
const Picreview = styled.div`
border: 4px solid #F38640;
box-sizing: border-box;
border-radius: 50px;
height:400px;
width:300px;
`

const ReviewSection = styled.div`
display: flex;
padding:40px;
width:80%;
justify-content: center;
align-items: space-evenly
`

const ReviewDetail = styled.div`
margin:auto;
padding:auto;
max-width: 300px`

const ReviewBar = styled.hr`
border: 1px solid #F38640;
margin-top:25px;
`
const Navcc = styled.div`
width: 24px;
height: 24px;
border-radius:100%;
cursor:pointer;
margin:20px;
`
const Demo = () => {
	const [review, updatereview] = useState({
		dot1: "#F38640",
		dot2: "white",
		dot3: "white",
		name: 'Nguyen Tien Dung',
		title: 'Truong Ban Chuyen Mon',
		comment: 'nxet nxetnxetnxetnxet nxet nxet nxet nxet nxetnxet nxet nxet nxet nxet nxetnxet nxet nxet nxet nxet ',
		link: "https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/80617560_1564902187026378_8035853312253231104_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=FPUVyZ65UFcAX-SbyGT&_nc_ht=scontent.fhan2-6.fna&oh=734c5546927caae63943b5690ec05006&oe=5F454FA7"
	});
	const dots = document.getElementsByClassName('Dot');
	for (var i = 0; i < 3; i++) {
		// dots[i].style.background = '#FFFFFF'
		console.log(dots[i])
	}
	return (
		<ReviewContain>
			<ReviewSection>
				<Picreview style={{ backgroundImage: `url(${review.link})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></Picreview>
				<ReviewDetail>
					<Gioithieuheading>{review.name}</Gioithieuheading>
					<ReviewBar></ReviewBar>
					<Gioithieutext>{review.title}</Gioithieutext>
					<Gioithieutext>{review.comment}</Gioithieutext>
				</ReviewDetail>
			</ReviewSection>
			<div style={{ display: 'flex', width: '200px', justifyContent: 'space-between', margin: 'auto' }}>
				<Navcc className='Dot' onClick={() => updatereview(reviewdata[0])} style={{ background: `${review.dot1}` }}></Navcc>
				<Navcc className='Dot' onClick={() => updatereview(reviewdata[1])} style={{ background: `${review.dot2}` }}></Navcc>
				<Navcc className='Dot' onClick={() => updatereview(reviewdata[2])} style={{ background: `${review.dot3}` }}></Navcc>
			</div>
		</ReviewContain>
	)
};

console.log(reviewdata)

export default function Home() {
	return (
		<All>
			<div id='explore'>
				<Test>
					<Gioithieucontain>
						<Gioithieuheading>GIOI THIEU</Gioithieuheading>
						<Gioithieutext>Gioi thieu Gioi Thieu</Gioithieutext>
						<ExploreBtn><ExploreText href='/about'>Explore</ExploreText></ExploreBtn>
					</Gioithieucontain>
				</Test>
			</div>
			<Upcomingeventbg id='next event'>
				<Upcomingeventbox>
					<Upeventheadingbox>
						<Gioithieuheading>UONLINE CONTEST</Gioithieuheading>
						<Gioithieutext>Dess awifap pawjfpawf pajwifjpawof apjwfijpawf papawfpaf rig seofa[ờ oawfonp awhfoawi awofiapw aowifpfn</Gioithieutext>
					</Upeventheadingbox>
					<ExploreText href='/event' style={{ padding: '60px' }}>Doc them</ExploreText>
					<div>
						<Deseventtext><BsFillClockFill style={{ marginRight: '10px' }} /> Thoi gian</Deseventtext>
						<Deseventtext><BsFillFlagFill style={{ marginRight: '10px' }} /> Dia diem</Deseventtext>
						<DKText>Dang ki</DKText>
					</div>
				</Upcomingeventbox>
			</Upcomingeventbg>
			<Achievementcontain id='Number'>
				<Gioithieuheading>NHUNG CON SO AN TUONG</Gioithieuheading>
				<Achicolucontain>
					<Achicolu>
						<RED><FaRegIdCard style={{ color: 'white', transform: 'scale(4)' }} /></RED>
						<Gioithieuheading>600 thí sinh</Gioithieuheading>
						<Gioithieutext>Khởi đầu từ năm 2015, Toán Mô hình Hà Nội đã thu hút 600 thí sinh tham dự</Gioithieutext>
					</Achicolu>
					<Achicolu>
						<BLUE><FaUserFriends style={{ color: 'white', transform: 'scale(4)' }} /></BLUE>
						<Gioithieuheading>150 đội thi</Gioithieuheading>
						<Gioithieutext>Rất nhiều các thí sinh từ khắp các tỉnh thành trên cả nước tham dự</Gioithieutext>
					</Achicolu>
					<Achicolu>
						<GREEN><FaMapMarkedAlt style={{ color: 'white', transform: 'scale(4)' }} /></GREEN>
						<Gioithieuheading>15 tỉnh thành</Gioithieuheading>
						<Gioithieutext>Với số lượng đông đảo các đội tham dự, Toán Mô hình không những tạo ra sân chơi bổ ích cho các bạn học sinh mà còn tạo ra một cộng đồng gắn kết</Gioithieutext>
					</Achicolu>
					<Achicolu>
						<YELLO><FaQuestion style={{ color: 'white', transform: 'scale(4)' }} /></YELLO>
						<Gioithieuheading>Nhân tố bí ẩn</Gioithieuheading>
						<Gioithieutext>Nhiều điều bất cmn ngờ mà đến chính BTC cũng không đoán trước được hihi</Gioithieutext>
					</Achicolu>
				</Achicolucontain>
			</Achievementcontain>
			<div id='commet'><Demo></Demo></div>
			<BKimage id='bk'></BKimage>
			<div id='partner' style={{ width: '80%', margin: 'auto' }}>
				<Gioithieuheading>Partner</Gioithieuheading>
				<hr></hr>
			</div>
			<div id='mailrec' style={{ width: '80%', margin: 'auto' }}>
				<Gioithieuheading>Mail</Gioithieuheading>
				<hr></hr>
				<Subcontain>
					<div>
						<Gioithieutext>Nhận thông tin </Gioithieutext>
					</div>
					<Mailfield>
						<Subemail type="input" placeholder="Email" name="name" id='name' required />
						<Email className='form__label'>Email</Email>
					</Mailfield>
					<SubText href='/event' style={{ padding: '10px' }}>Subcribe</SubText>
				</Subcontain>
			</div>
		</All>
	)
}