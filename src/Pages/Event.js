import React from 'react';
import styled from 'styled-components';
import Backgroundvideo from '../images/MVI_2588.MP4'

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
`

const Eventaboutext = styled.div`
color:white;
text-align:center;
`

export default function About() {
	return (
		<>
			<Aboutcontain>
				<div style={{
					paddingTop: '60px',
					width: '100%',
					height: '80vh',
					backgroundColor: '#aaa',
					zIndex: 2,
					position: 'relative',
				}}>
					<video play muted id="myVideo">
						<source src={Backgroundvideo} type="video/mp4" />
					</video>
				</div>
				<div>
					<div>Events</div>
					<div>
						Lỏema apwjvpa awpcjpao apvjpawjvpam
						awevjapwvpajrvsuobonauf vaowhvo oăhv
						ao whevoawvnoan aowvhoawijveaw oahwvoanv
					</div>
				</div>
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nam ratione maiores iure ea asperiores
								veniam vel modi consectetur quae animi magnam ex amet aspernatur aut et repellat. Itaque, iusto.
						</Eventaboutext>
							<Timebtn href="#contain2018">Đọc thêm</Timebtn>
						</Timecontent>
					</Timeitems>
					<Timeitems className='time-item'>
						<Timebg
							style={{ backgroundImage: `url(https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/116878828_602262417157942_2999931848034690176_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=F6JQSCjbHGIAX_3enEv&_nc_ht=scontent.fhan3-1.fna&oh=c328a322f079779a59e7b43866620d9a&oe=5F4EE494)` }}>
						</Timebg>
						<Timeyear class="time-year">
							<Text>ONLINE CONTEST</Text>
						</Timeyear>
						<Timecontent className="time-content">
							<Eventaboutext>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nam ratione maiores iure ea asperiores
								veniam vel modi consectetur quae animi magnam ex amet aspernatur aut et repellat. Itaque, iusto.
						</Eventaboutext>
							<Timebtn href="#contain2019">Đọc thêm</Timebtn>
						</Timecontent>
					</Timeitems>
					<Timeitems className='time-item'>
						<Timebg style={{ backgroundImage: `url(https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/117120454_787965218639537_1322964507494404472_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=Ri5po3sHA_oAX-03_pD&_nc_ht=scontent.fhan4-1.fna&oh=8c278253b5319dc72f075ef0c7d3e6b4&oe=5F4DCB43)` }}></Timebg>
						<Timeyear class=" time-year">
							<Text>OFFLINE CONTEST</Text>
						</Timeyear>
						<Timecontent className="time-content">
							<Eventaboutext>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nam ratione maiores iure ea asperiores
								veniam vel modi consectetur quae animi magnam ex amet aspernatur aut et repellat. Itaque, iusto.
						</Eventaboutext>
							<Timebtn href="#contain2020">Đọc thêm</Timebtn>
						</Timecontent>
					</Timeitems>
				</Timeline>
			</section>
		</>
	);
}