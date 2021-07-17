import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="roadmap" onClick={toggle}>Roadmap</SidebarLink>
                    <SidebarLink to="token" onClick={toggle}>Token</SidebarLink>
                    <SidebarLink to="invest" onClick={toggle}>Invest</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="https://drive.google.com/file/d/19z9foncYtzas3w8BPg81GEcDGHEtIMz2/view">White Paper</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
