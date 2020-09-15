import React from 'react';
import styled from 'styled-components';

import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";


const RED = styled.div`
width: 7vh;
height: 7vh;
border: 2px solid #CF3527;
box-sizing: border-box;
border-radius:100%;
`
const BLUE = styled.div`
width: 7vh;
height: 7vh;
border: 2px solid #29ABE2;
box-sizing: border-box;
border-radius:100%;
`
const GREEN = styled.div`
width: 7vh;
height: 7vh;
border: 2px solid #A4C404;
box-sizing: border-box;
border-radius:100%;
`
const Colorcontain = styled.div`\
margin-top:5vh;
width:20vw;
display:flex;
flex-flow:row no-wrap;
margin:auto;
justify-content:space-evenly;
@media only screen and (max-width: 600px) {
	width:50%;
}
`
const Infotext = styled.h4`
color:#566B72;
font-family: Roboto;
font-style: normal;
font-weight: bold;
margin:auto;
margin-top:3vh;
text-align:center;
font-size: 12px;
`
const HRhorizon = styled.hr`
width: 80%;
margin:auto;
margin-bottom:3vh;
border: 1px solid #566B72;

`
const HRvertical = styled.div`
height: 80px;
width: 5%;
margin: auto 0vh auto 0vh;
border-left: 2px solid #566B72;
@media only screen and (max-width: 600px) {
display:none;
}
`

const Maincontainer = styled.div`
display:flex;
flex-flow: row no-wrap;
width:90%;
margin: auto;
justify-content: center;
@media only screen and (max-width: 600px) {
	width:100%;
	}
`
const Menu = styled.div`
width:25%;
@media only screen and (max-width: 600px) {
	width:70%;
	}
`

const Cata = styled.div`
display:flex;
width: 65%;
flex-flow:row no-wrap;
justify-content: space-between;
@media only screen and (max-width: 600px) {
	display:none;
}
`

const Catabox = styled.div`
display:flex
flex-flow: column no wrap`

const Link = styled.a`
text-decoration:none;
color:black;
&:hover{
	color:#566B72;
}
`

export default function Footer() {
	return (
		<div style={{ backgroundColor: '#F7F8FA', padding: '3vh' }}>
			<Maincontainer>
				<Menu>
					<h3><Link href='/'>MATHMODELING</Link></h3>
					<div>
						<Link href='https://www.facebook.com/toanmohinh.hanoi/'><FaFacebookSquare /></Link>
						<Link href=''><FaInstagramSquare /></Link>
						<Link href=''><FaYoutube /></Link>
					</div>
					<h5>0855 928 355 (Mrs.Hải)</h5>
					<h5>toanmohinhhanoi@gmail.com</h5>
				</Menu>
				<HRvertical />
				<Cata>
					<Catabox>
						<h4><Link href='/'>Home</Link></h4>
						<h6><Link href='/calendar'>Calendar</Link></h6>
						<h6><Link href='/FAQ'>FAQ</Link></h6>
					</Catabox>
					<Catabox>
						<h4><Link href='/about'>About</Link></h4>
						<h6><Link href='/about#member'>Our Team</Link></h6>
						<h6><Link href='/partner'>Partner</Link></h6>
						<h6><Link href='/contact'>Contact</Link></h6>
					</Catabox>
					<Catabox>
						<h4><Link href='/event'>Event</Link></h4>
						<h6><Link href='/'>Info Session</Link></h6>
						<h6><Link href='/'>Online Contest</Link></h6>
						<h6><Link href='/'>Offline Contest</Link></h6>
					</Catabox>
					<Catabox>
						<h4><Link href='/blog'>Blog</Link></h4>
					</Catabox>
					<Catabox>
						<h4><Link href='/image'>Image Gallery</Link></h4>
					</Catabox>
				</Cata>
			</Maincontainer>
			<HRhorizon />
			<Colorcontain>
				<RED />
				<GREEN />
				<BLUE />
			</Colorcontain>
			<Infotext>@Mathmodeling2020</Infotext>
			<Infotext>Website designed and developed by 💖 & ☕  </Infotext>
		</div >
	)
}