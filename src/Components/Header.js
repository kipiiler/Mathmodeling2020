import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logoimg } from '../images/tmh.svg'

const Maincontainer = styled.div`
background:transparent;
position: fixed;
display:flex;
flex-flow: row no-wrap;
align-items:center;
`
const Logo = styled.div`
width:10%;
`

const Navbar = styled.div`
display:flex;
flex-flow:row no-wrap;
justify-content: flex-start;
width:100%;
`
const NavbarContainer = styled.div`
width:calc(100vw*80/100);
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
	background-image: linear-gradient(to right,#259759 ,#29A1C5);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
}
`
const HRBar = styled.hr`
margin:0px;
border: .5px solid white;
margin-left: 1vh;
`

const Branding = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
padding:1vh;
color:white
`

export default function Header() {
	return (
		<Maincontainer style={{ zIndex: 10 }}>
			<Logo><Logoimg style={{ height: '60px', width: '100%' }} /></Logo>
			<NavbarContainer>
				<Branding>MATHMODELING</Branding>
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
	)
}