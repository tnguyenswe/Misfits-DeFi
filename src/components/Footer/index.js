import React from 'react';
import styled from 'styled-components';
import MisfitsLogo from '../../images/misfits-logo-with-text.png';
import { SocialIcon } from 'react-social-icons';


const MainDiv = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: #070f1c;
    background-color: black;

    
    @media (max-width: 500px){
        padding-top: 50px;
    }
    
`


const PrimaryText = styled.h1`
    color: white;
    font-size: 10px;
`

const LargeText = styled.h1`
    color: white;
    font-size: 20px;
    padding-bottom: 20px;
`

const ParentGrid = styled.div`
    z-index: 2;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    grid-row-gap: 30px;
    grid-column-gap: 10px;

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`

const GridColumns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;
`

const FooterImage = styled.img`
    width: 300px;
    justify-self: start;
    align-self: start;
`

// const CircleDiv = styled.div`
//     border-radius: 50%;
//     border: 2px solid #4ec8ca;
//     width: 50px;
//     height: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const FlexBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`



const Footer = () => {


    return (
        <MainDiv>
            <ParentGrid>
                <GridColumns>
                    <FooterImage src={MisfitsLogo} alt="Logo"/>
                </GridColumns>
                <GridColumns>
                    <PrimaryText>Misfits DeFi (MFTS) is a community driven, fair launched DeFi Token. We will continue to build on the token and the delivery platform taking into consideration the feedback from the community.</PrimaryText>
                </GridColumns>
                <GridColumns>
                    <FlexBox>
                        <LargeText>Follow us</LargeText>
                    </FlexBox>
                    <FlexBox>
                            <SocialIcon url="https://twitter.com/MisfitsDeFi" style={{borderRadius: '50%', margin: '0px 20px'}}/>
                            <SocialIcon url="https://linkedin.com/company/MisfitsDeFi" style={{borderRadius: '50%', margin: '0px 20px'}}/>
                            <SocialIcon url="https://reddit.com/r/MisfitsDeFi" style={{borderRadius: '50%', margin: '0px 20px'}}/>
                    </FlexBox>
                </GridColumns>
            </ParentGrid>
        </MainDiv>
    )
}

export default Footer
