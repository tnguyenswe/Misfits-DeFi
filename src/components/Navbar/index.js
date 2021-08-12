import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
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
                            <NavLinks to="roadmap">Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="token">Token</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="invest">Invest</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href="https://drive.google.com/file/d/1SwC0mxgutbIHJ4LT-rt4IcwiU4j_CL5G/view?usp=sharing">White Paper</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
