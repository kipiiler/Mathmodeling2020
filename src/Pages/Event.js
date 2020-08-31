import React from 'react';
import styled from 'styled-components';
import Backgroundvideo from '../images/MVI_2588.MP4'
import Curved from '../images/Curved.svg'

const Aboutcontain = styled.div`
background:#2C5684;
`

const Timeline = styled.div`
	display: flex;
  padding: 0;
  margin: 0;
  line-height: 1.75;
  font-size: 15px;
	background-color: #000;
	&:hover .time-item{
		width: 30%;
	}
	@media only screen and (max-width: 600px) {
		flex-flow:column;
		&:hover .time-item{
			width: 100%;
		}
	}
`
const Timeitems = styled.div`
transform: translate3d(0,0,0);
position: relative;
width: 100%/3;
height: 100vh;
min-height: 600px;
overflow: hidden;
transition: width 0.5s ease;
&::before{
	transform: translate3d(0,0,0);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
	height: 100%;
	background: linear-gradient(to bottom, rgba(255, 165, 0, 0.8) 0%, rgba(243, 134, 64, 0.7) 75%);
  z-index: 1;
  opacity: 0;
  transform: translate3d(0,0,0);
  transition: opacity .5s ease ,transform .5s ease;
};
&::after{
	transform: translate3d(0,0,0);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
	height: 100%;
	background: rgba(22, 22, 22, 0.8);
	opacity: 1;
  transition: opacity .5s ease;
};
&:hover{
	width: 40% !important;
};
&:hover::after{
  opacity: 0;
};
&:hover::before{
  opacity: 1;
  transform: translate3d(0,0,0);
  transition: transform 1s ease .25s, opacity 1s ease;
};
&:hover .time-content{
  opacity: 1;
  transform: translateY(0);
  transition: all .75s ease .5s;
};
@media only screen and (max-width: 600px) {
	width:100%;
	&:hover{
		width: 100% !important;
	};
	&:hover::after{
		opacity: 0;
	};
	&:hover::before{
		opacity: 1;
		transition: transform 1s ease .25s, opacity 1s ease;
	};
	&:hover .time-content{
		opacity: 1;
		transform: translateY(0);
		transition: all .75s ease .5s;
	};
}
`
const Timebg = styled.div`
	position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(0,0,0);
  background-size: cover;
  background-position: center center;
  transition: filter .5s ease;
`
const Timeyear = styled.div`
	position: absolute;
	width:max-content;
  top:30%;
  left:50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 1;
  border-top: 1px solid white;
	border-bottom: 1px solid white;
`
const Timecontent = styled.div`
z-index: 1;
position: relative;
transform: translate3d(0,0,0) translateY(25px);
text-align: center;
font-family: 'Lato', sans-serif;
top:45%;
margin-left:5vh;
margin-right:5vh;
opacity: 0;
`
const Text = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
	font-weight: bold;
	font-family: 'Courier New', Courier, monospace;
	color: white;
	text-align:center;
	transition: all ease 0.4s;
`
const Timebtn = styled.a`
display: inline-block;
margin-top:5vh ;
padding: 1vh;
text-align: center;
&:link{
	text-decoration: none;
	font-size: 1.6rem;
	color: #f0f0f0;
	transition: all 0.4s;
};
 &:hover {
	border: 1px solid white; 
};
&:visited{
	color:white;
}
`

const Eventaboutext = styled.div`
color:white;
text-align:center;
`
const CurvedCover = styled.div`
background: url(${Curved});
background-size:cover;
position:absolute;
height:30%;
width:100%;
bottom:0px;
`
const Videocontainer = styled.div`
width: 100%;
position: relative;
height:80vh;
`
const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
`
const Overlay = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color:rgba(83, 132, 172,.8)`

const Calendarbtn = styled.a`
padding-left: 70px;
padding-right: 70px;
padding-top:10px;
padding-bottom:10px;
background: #F38640;
border-radius: 40px;
position:absolute;
font-size:2rem;
font-weight:bold;
color:white;
top:50%;
left:50%;
transform:translate(-50%,-50%);
&:hover{
	color:black;
	background:white;
};
text-decoration:none;
`
const Eventintro = styled.div`
display:flex;
flex-flow:column;
align-items: center;
padding-bottom:50px;
`

const Eventtext = styled.div`
font-family: Roboto;
font-weight: bold;
font-size: 30px;
color: #FFFFFF;
`
const Eventdes = styled.div`
font-family: Roboto;
font-size: 20px;
width:45%;
padding:20px;
margin-top:20px;
text-align: center;
color: #FFFFFF;
border: 1px solid #FFFFFF;
@media only screen and (max-width: 600px) {
	width:75%;
}
`
export default function About() {
	return (
		<>
			<Aboutcontain>
				<Videocontainer>
					<Video autoPlay muted loop>
						<source src={Backgroundvideo} type="video/mp4" />
					</Video>
					<Overlay></Overlay>
					<CurvedCover></CurvedCover>
					<Calendarbtn href='/calendar'>Calendar</Calendarbtn>
				</Videocontainer>
				<Eventintro>
					<Eventtext>Events</Eventtext>
					<Eventdes>
						Trải qua 5 năm tổ chức, Toán Mô hình đã tổ chức thành công 5 mùa với tổng cộng hơn 600 thí sinh tham gia đến từ mọi miền tổ quốc. Chưa dừng lại ở đó, Toán Mô hình cũng đã tổ chức thành công nhiều buổi Info Session và những cuộc thi Toán Mô hình Online nhằm giới thiệu bộ môn Toán Mô hình tới các bạn học sinh THPT trên địa bàn cả nước. Sự phản hồi tích cực từ học sinh tăng dần đã làm tăng yêu cầu về chất lượng và quy mô của chương trình.					</Eventdes>
				</Eventintro>
			</Aboutcontain>
			<section>
				<Timeline>
					<Timeitems className='time-item'>
						<Timebg
							style={{ backgroundImage: `url(https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/117145911_621741411794230_7137393875840939312_n.jpg?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=rcZxL862Z9gAX_HHTax&_nc_ht=scontent.fhan3-1.fna&oh=99c2a1bfe0c0f1fe7fbc0a66efeb43f2&oe=5F4E8000)` }}>
						</Timebg>
						<Timeyear>
							<Text>INFO SESSION</Text>
						</Timeyear>
						<Timecontent className="time-content">
							<Eventaboutext>
								Workshop thông tin về Toán Mô Hình được tổ chức tại Hà Nội với mục đích giới thiệu bộ môn và cuộc thi với các diễn giả là những giảng viên có chuyên môn trong ngành, hướng truyền tải những kiến thức Toán học lý thú và niềm đam mê với bộ môn.
						</Eventaboutext>
							<Timebtn href="#contain2018">Đọc thêm</Timebtn>
						</Timecontent>
					</Timeitems>
					<Timeitems className='time-item'>
						<Timebg
							style={{ backgroundImage: `url(https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/116878828_602262417157942_2999931848034690176_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=F6JQSCjbHGIAX_3enEv&_nc_ht=scontent.fhan3-1.fna&oh=c328a322f079779a59e7b43866620d9a&oe=5F4EE494)` }}>
						</Timebg>
						<Timeyear >
							<Text>ONLINE CONTEST</Text>
						</Timeyear>
						<Timecontent className="time-content">
							<Eventaboutext>
								Cuộc thi online được tổ chức qua Facebook fanpage chính thức của cuộc thi. Với nhiều chủ đề đa dạng và thực tiễn, cuộc thi không chỉ nuôi dưỡng và tình yêu Toán học mà còn tạo điều kiện được thử sức cho học sinh trên toàn quốc.
						</Eventaboutext>
							<Timebtn href="#contain2019">Đọc thêm</Timebtn>
						</Timecontent>
					</Timeitems>
					<Timeitems className='time-item'>
						<Timebg style={{ backgroundImage: `url(https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/117120454_787965218639537_1322964507494404472_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=Ri5po3sHA_oAX-03_pD&_nc_ht=scontent.fhan4-1.fna&oh=8c278253b5319dc72f075ef0c7d3e6b4&oe=5F4DCB43)` }}></Timebg>
						<Timeyear >
							<Text>OFFLINE CONTEST</Text>
						</Timeyear>
						<Timecontent className="time-content">
							<Eventaboutext>
								Sự kiện lớn nhất trong mỗi mùa của cuộc thi Toán Mô Hình là Main days - cuộc thi offline kéo dài trong 3 ngày. Không chỉ là một kỳ thi, Main days Toán Mô Hình còn có những buổi tập huấn với nhiều kiến thức bổ ích và hứa hẹn sẽ đem đến những trải nghiệm mới mẻ, cơ hội rèn luyện kỹ năng mềm, những tình bạn và kỷ niệm đáng nhớ cho tất cả thí sinh tham gia.
						</Eventaboutext>
							<Timebtn href="#contain2020">Đọc thêm</Timebtn>
						</Timecontent>
					</Timeitems>
				</Timeline>
			</section>
		</>
	);
}