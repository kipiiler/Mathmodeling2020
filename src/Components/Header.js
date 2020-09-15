import React, { useState } from 'react';
import styled from 'styled-components';
import Img from '../images/tmh.png';
import { FaBars } from 'react-icons/fa';

const Maincontainer = styled.div`
background:transparent;
position: fixed;
display:flex;
max-height:75px;
flex-flow: row no-wrap;
align-items:center;
@media only screen and (max-width: 600px) {
	max-height:200px;
	width:100%;
	padding-left:20px;
}
`
const Logo = styled.div`
width:10%;
`
const Logoimg = styled.div`
background:url("${Img}");
background-size: contain;
background-repeat:no-repeat;
background-position:center;
height: 60px; 
width:100%;
@media only screen and (max-width: 600px) {
	height:100px;
}
`

const Navbar = styled.div`
display:flex;
flex-flow:row no-wrap;
justify-content: flex-start;
width:100%;
@media only screen and (max-width: 600px) {
	display:none;
}
`
const NavbarContainer = styled.div`
width:calc(100vw*80/100);
@media only screen and (max-width: 600px) {
	width:80%;
	display:flex;
	flex-flow:row wrap;
	justify-content:space-around;
	align-items:center;
}
`
const Link = styled.a`
padding:1vh;
margin-right: 60px;
text-decoration:none;
font-weight: bold;
color:white;
transition: .5s ease all;
&:hover{
	font-size:120%;
	color: antiquewhite;
};
`
const HRBar = styled.hr`
margin:0px;
border: .5px solid white;
margin-left: 1vh;
@media only screen and (max-width: 600px) {
	display:none;
}
`

const Branding = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
padding:1vh;
color:white;
`
const MobileMenubtn = styled.div`
display:none;
@media only screen and (max-width: 600px) {
	display:block;
}
`
const Submenu = styled.div`
position:fixed;
height:100%;
z-index:20;
background-color:rgb(0, 0, 0,.8);
width:100%;
top: 0px;
`
const Column = styled.div`
margin-right:0;
display:flex;
flex-flow:column wrap;
float:right;
align-items:flex-end;
width:50%;
height:100%;	
background:rgb(83, 132, 172);
padding-left:50px;
padding-right:50px;
`
const Linkmobile = styled.a`
padding:1vh;
text-decoration:none;
font-weight: bold;
color:white;
text-align:right;
font-size:20px;
padding:10px;
`
export default function Header() {
	const [Menumobi, setMenu] = useState(false);

	return (
		<>
			<Submenu hidden={!Menumobi} onClick={() => { setMenu(!Menumobi) }}>
				<Column>
					<Linkmobile href='/' style={{ marginTop: '50px' }}>Home</Linkmobile>
					<Linkmobile href='/about'>About</Linkmobile>
					<Linkmobile href='/event'>Event</Linkmobile>
					<Linkmobile href='/blog'>Blog</Linkmobile>
					<Linkmobile href='/image'>Image Gallery	</Linkmobile>
				</Column>
			</Submenu>

			<Maincontainer style={{ zIndex: 10 }}>
				<Logo><Logoimg href='/'></Logoimg></Logo>
				<NavbarContainer>
					<Branding><Link href='/'>MATHMODELING</Link></Branding>
					<MobileMenubtn onClick={() => { setMenu(!Menumobi) }}>
						<FaBars style={{ color: 'white', transform: 'scale(1.5)' }} />
					</MobileMenubtn>
					<HRBar></HRBar>
					<Navbar>
						<Link href='/'>Home</Link>
						<Link href='/about'>About</Link>
						<Link href='/event'>Event</Link>
						<Link href='/blog'>Blog</Link>
						<Link href='/image'>Image Gallery	</Link>
					</Navbar>
				</NavbarContainer>
			</Maincontainer>
		</>
	)
}