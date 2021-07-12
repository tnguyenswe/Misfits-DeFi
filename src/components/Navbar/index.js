import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import LogoImage from './misfits-logo.png'

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLinks to="home">
                        {/*Misfits*/}
                       <img style={{width: "150px", height: "60px"}} src={LogoImage} alt='logo'/>
                    </NavLinks>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Token</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signups">Where to invest</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href="https://drive.google.com/file/d/19z9foncYtzas3w8BPg81GEcDGHEtIMz2/view">White Paper</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
