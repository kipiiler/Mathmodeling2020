import React from 'react';
import styled from 'styled-components'

const Maincontainer = styled.div`
background:transparent;
position: fixed;
display:flex;
flex-flow: row no-wrap;
align-items:center;
`
const Logo = styled.div``

const Navbar = styled.div`
display:flex;
flex-flow:row no-wrap;
justify-content: flex-start;
width:100%;
`
const NavbarContainer = styled.div`
width:80%;
margin-left:5vh;
`
const Link = styled.a`
`
export default function Header() {
	return (
		<Maincontainer>
			<div>Logo container</div>
			<NavbarContainer>
				<div>MATHMODELING</div>
				<hr></hr>
				<Navbar>
					<div>Home</div>
					<div>About</div>
					<div>Event</div>
					<div>Blog</div>
					<div>Image Gallery</div>
				</Navbar>
			</NavbarContainer>
		</Maincontainer>
	)
}