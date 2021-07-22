import React from 'react';
import styled from 'styled-components';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background-color: #070f1c;

`

const MainDiv = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #070f1c;
    z-index: 2;

    @media (max-width: 450px){
        height: 1300px;
    }
    
`

const MyGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const RoadmapButton = styled(RadioButtonCheckedIcon)`
    color: #4ec8ca;
    z-index: 2;
`

const QuarterText = styled.h1`
    color: #4ec8ca;
    font-size: 32px;
    z-index: 2;
`

const VerticalLine = styled.div`
    border: 2px solid white;
    height: 10px;
    padding-top: 100px;
    width: 1px;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 2;
`

const VerticalLineDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    z-index: 2;
`

const Texts = styled.h1`
    color: white;
`


const TitleText = styled.h1`
    padding-bottom: 100px;
    font-weight: 700;
    color: #4ec8ca;
    font-size: 32px;
    justify-self: center;
    z-index: 2;
`

const Roadmap = () => {


    return (
        <MainDiv id="roadmap">
            <VerticalLineDiv>
                <TitleText>Misfits DeFi Roadmap</TitleText>
            </VerticalLineDiv>
            <MyGrid className="pr-12 sm:pr-0">
                <VerticalLineDiv>
                    <RoadmapButton style={{fontSize: '64px'}}/>
                </VerticalLineDiv>
                <QuarterText>Q3 2021</QuarterText>

                <VerticalLineDiv>
                    <VerticalLine/>
                </VerticalLineDiv>
                <TextDiv>
                    <Texts>- Launch of Misfits DeFi website</Texts>
                    <Texts>- White Paper established</Texts>
                </TextDiv>

                <VerticalLineDiv>
                    <RoadmapButton style={{fontSize: '64px'}}/>
                </VerticalLineDiv>
                <QuarterText>Q4 2021</QuarterText>

                <VerticalLineDiv>
                    <VerticalLine/>
                </VerticalLineDiv>
                <TextDiv>
                    <Texts>- Development of token</Texts>
                    <Texts>- KYC/AML</Texts>
                    <Texts>- Presale Launch</Texts>
                </TextDiv>

                <VerticalLineDiv>
                    <RoadmapButton style={{fontSize: '64px'}}/>
                </VerticalLineDiv>
                <QuarterText>Q1 2022</QuarterText>

                <VerticalLineDiv>
                    <VerticalLine/>
                </VerticalLineDiv>
                <TextDiv>
                    <Texts>- Misfits DeFi Token Sale</Texts>
                    <Texts>- DEX Listing</Texts>
                </TextDiv>

                <VerticalLineDiv>
                    <RoadmapButton style={{fontSize: '64px'}}/>
                </VerticalLineDiv>
                <QuarterText>Q2 2022</QuarterText>

                <VerticalLineDiv>
                </VerticalLineDiv>
                <TextDiv>
                    <Texts>- USA Misfits Delivery Platform Development</Texts>
                    <Texts>- Token Airdrops</Texts>
                    <Texts>- Marketing Campaigns</Texts>
                </TextDiv>


            </MyGrid>
        </MainDiv>
    )
}

export default Roadmap