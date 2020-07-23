import React from 'react';
import styled from 'styled-components'

const Maincontainer = styled.div`
background:transparent;
position: fixed;
display:flex;
flex-flow: row no-wrap;
align-items:center;
`
const Logo = styled.div`
width:15%;
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
&:hover{
	color:#F38640;
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
		<Maincontainer>
			<Logo>Logo container</Logo>
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