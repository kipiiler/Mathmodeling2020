import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../images/hoem.svg';
import Upevent from '../images/thion.jpg';

import Medal from "../images/huychuong.JPG";

import { FaUserFriends, FaRegIdCard, FaMapMarkedAlt, FaQuestion, FaLocationArrow, FaRegClock } from "react-icons/fa"

import Hiepngu from "../images/Review/Hiep_Ngu.jpg"
import Minhkhue from "../images/Review/Minh_Khue.jpeg"
import BachThao from "../images/Review/Bach_Thao.jpg"

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
line-height: 35px;
@media only screen and (max-width: 600px) {
	padding:10px;
	text-align:center;
}`

const Gioithieutext = styled.div`
color: #FFFFFF;
font-style: normal;
font-weight: bold;
padding-top:30px;
line-height: 23px;`

const Upcomingeventbg = styled.div`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${Upevent});
transform: skewY(-5deg);
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
transform: skewY(5deg);
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
margin-bottom:20px;
font-weight: bold;
font-size: 20px;
line-height: 19px;
`
const DKText = styled.a`
color: #FFFFFF;
background: #2C5684;
border-radius: 100px;
font-weight:bold;
text-decoration:none;
&:hover{
	color: #F38640;
	transition: .5s ease all;
}
text-decoration: none;
width:max-content;
margin-top:30px;
margin-left: auto;
margin-right:auto;
padding-left: 40px;
padding-right: 40px;
padding-top: 10px;
padding-bottom: 10px;
`
const Achievementcontain = styled.div`
margin-top:100px;
display:flex;
align-items:center;
flex-flow:column wrap;
`
const Achicolucontain = styled.div`
margin-top:50px;
display:flex;
justify-content: space-evenly;
flex-flow:row wrap;
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
width:25%;
text-align:center;
display:flex;
flex-flow:column;
align-items:center;
@media only screen and (max-width: 600px) {
	width:70%;
	padding-bottom:50px;
}
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
justify-content:space-around		;
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
		name: 'Hồ Tùng Hiệp',
		title: 'Thí sinh TMH 2019',
		comment: 'Cũng nhờ có TMH mà mình được trải nghiệm và bạo dạn hơn nữa, lần đầu mình đi một mình xa gia đình như vậy, lần đầu mình không ngủ được vì sợ dậy muộn xe đi mất lại phải chạy như hôm trước đó :))))) lần đầu cùng anh em trong team thức đêm làm slide để hôm sau trình bày, được thuyết trình bài giải của mình trước những người thầy cô nổi tiếng. Đây thật sự là một trải nghiệm đáng nhớ.Mùa mới chắc sẽ có nhiều thay đổi, nhưng mình mong rằng người chơi năm nay vẫn sẽ có được những trải nghiệm đáng nhớ như mình đã may mắn có được trong năm trước nhé!',
		link: Hiepngu
	},
	{
		dot1: "white",
		dot2: "#F38640",
		dot3: "white",
		name: 'Nguyễn Minh Khuê',
		title: 'Á quân TMH 2018 & 2019',
		comment: 'Mình biết đến tmh 1 cách rất tình cờ, và mình đki tham gia vì muốn thử sức với cái gì đó mới lạ. Đội mình đặt tên là Núp nghĩa là noob + ẩn núp vì chúng mình nghiệp dư ma =))). Và những trải nghiệm của mình ở tmh thật sự rất thú vị. Mình cbh tham gia cuộc thi nào làm nhiều mà chơi cũng nhiều như vậy. Nhờ tmh mà mình tìm thấy sự hứng thú với bộ môn toán ứng dụng, cụ thể hơn là thống kê - ptich số liệu, và đó cũng trở thành 1 phần mình muốn học trên đhoc. Cảm ơn cuộc thi vì đã là 1 phần của 2 mùa hè cấp 3 của mình. Rất là vui rất là đáng thử nhé mọi người!',
		link: Minhkhue
	},
	{
		dot1: "white",
		dot2: "white",
		dot3: "#F38640",
		name: 'Bạch Thị Thảo Nguyên',
		title: ' BTC TMH 2017 & 2018',
		comment: ' Nói về TMH thì với mình, không có định nghĩa nào hợp lý hơn "những người anh em tuyệt vời". Mình tham gia btc TMH từ năm mình học lớp 10, ngày đấy mình bé nhất trong btc và hầu như ngơ ngơ chả biết gì ý. Nhma mn luôn hướng dẫn, chỉ bảo rất nhiều, xong hết ct mn còn rủ nhau đi xp cơ. Vì tình cảm đó mà mình lại đăng ký làm btc TMH năm sau. Còn năm mình 12 thì do lỗi sợ thi cử nên mình chỉ đồng hành trên phương diện online thui ^^ Nc tham gia TMH mình có thêm kinh nghiệm, có thêm những người anh, người chị, người bạn vô cũng đi nữa nên mình luôn mong có thể support cho TMH nhiều nhất có thể. Hơn hết, đây cũng là 1 sân chơi khá hay đối với các bạn hs c3, nội dung cũng khá mới lạ, thiết thực nữa nên mình cũng mong TMH sẽ càng ngày càng phát triển và đem đến nhiều giá trị cho người tham gia.',
		link: BachThao
	}
]
const ReviewContain = styled.div`
width:80%;
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
@media only screen and (max-width: 600px) {
	width:90%;
}
`
const Picreview = styled.div`
border: 4px solid #F38640;
box-sizing: border-box;
margin:auto;
border-radius: 50px;
height:400px;
width:300px;
@media only screen and (max-width: 600px) {
	height:200px;
	width:200px;
}
`

const ReviewSection = styled.div`
display: flex;
padding:40px;
width:80%;
justify-content: space-evenly;
flex-flow:row;
align-items: space-evenly;
@media only screen and (max-width: 800px) {
	flex-flow:column;
}
`

const ReviewDetail = styled.div`
margin:auto;
padding:auto;
max-width: 500px`

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
		name: 'Hồ Tùng Hiệp',
		title: 'Thí sinh TMH 2019',
		comment: 'Cũng nhờ có TMH mà mình được trải nghiệm và bạo dạn hơn nữa, lần đầu mình đi một mình xa gia đình như vậy, lần đầu mình không ngủ được vì sợ dậy muộn xe đi mất lại phải chạy như hôm trước đó :))))) lần đầu cùng anh em trong team thức đêm làm slide để hôm sau trình bày, được thuyết trình bài giải của mình trước những người thầy cô nổi tiếng. Đây thật sự là một trải nghiệm đáng nhớ.Mùa mới chắc sẽ có nhiều thay đổi, nhưng mình mong rằng người chơi năm nay vẫn sẽ có được những trải nghiệm đáng nhớ như mình đã may mắn có được trong năm trước nhé!',
		link: Hiepngu
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

export default function Home() {
	return (
		<All>
			<div id='explore'>
				<Test>
					<Gioithieucontain>
						<Gioithieuheading>Toán Mô Hình Hà Nội</Gioithieuheading>
						<Gioithieutext>Math Modelling Contest - MMC</Gioithieutext>
						<ExploreBtn><ExploreText href='/about'>Tìm hiểu</ExploreText></ExploreBtn>
					</Gioithieucontain>
				</Test>
			</div>
			<Upcomingeventbg id='next event'>
				<Upcomingeventbox>
					<Upeventheadingbox>
						<Gioithieuheading>OFFLINE CONTEST</Gioithieuheading>
						<Gioithieutext>Sự kiện lớn nhất trong mỗi mùa của cuộc thi Toán Mô Hình là Main days - cuộc thi offline kéo dài trong 3 ngày.</Gioithieutext>
					</Upeventheadingbox>
					<ExploreText href='/event' style={{ margin: '50px' }}>Đọc Thêm</ExploreText>
					<div>
						<Deseventtext><FaRegClock style={{ marginRight: '20px', color: 'white', transform: 'scale(1.2)' }} /> 26,27/09/2020 </Deseventtext>
						<Deseventtext><FaLocationArrow style={{ marginRight: '20px', color: 'white', transform: 'scale(1.2)' }} />Đại học Sư Phạm</Deseventtext>
						<DKText href='https://docs.google.com/forms/d/e/1FAIpQLSd4Ime2jQ3I_H6C-Waov27tWymk-kH0rQLLeZt2W-yQQAIHDQ/viewform?fbclid=IwAR0Zl60dE8RzENyKI0XN3KqmkNgaGEOxGXP3L4B0znkxZcqk4Q_f7YDod7Y'>Đăng kí</DKText>
					</div>
				</Upcomingeventbox>
			</Upcomingeventbg>
			<Achievementcontain id='Number'>
				<Gioithieuheading >NHỮNG CON SỐ ẤN TƯỢNG</Gioithieuheading>
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
				<Gioithieuheading>Nhận Thông Tin</Gioithieuheading>
				<hr></hr>
				<Subcontain>
					<Mailfield>
						<Subemail type="input" placeholder="Email" name="name" id='name' required />
						<Email className='form__label'>Email</Email>
					</Mailfield>
					<SubText href='/event' style={{ padding: '10px' }}>Subcribe</SubText>
				</Subcontain>
			</div>
		</All >
	)
}