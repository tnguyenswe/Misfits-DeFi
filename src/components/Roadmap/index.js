import React from 'react';
import styled from 'styled-components';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const MainDiv = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

const MyGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const RoadmapButton = styled(RadioButtonCheckedIcon)`
    color: #4ec8ca;
`

const QuarterText = styled.h1`
    color: #4ec8ca;
    font-size: 32px;
`

const VerticalLine = styled.div`
    border: 2px solid black;
    height: 10px;
    padding-top: 100px;
    width: 1px;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const VerticalLineDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`


const TitleText = styled.h1`
    padding-bottom: 100px;
    font-weight: 700;
    color: #4ec8ca;
    font-size: 32px;
    justify-self: center;
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
                    <h1>- Launch of Misfits DeFi website</h1>
                    <h1>- White Paper established</h1>
                </TextDiv>

                <VerticalLineDiv>
                    <RoadmapButton style={{fontSize: '64px'}}/>
                </VerticalLineDiv>
                <QuarterText>Q4 2021</QuarterText>

                <VerticalLineDiv>
                    <VerticalLine/>
                </VerticalLineDiv>
                <TextDiv>
                    <h1>- Development of token</h1>
                    <h1>- KYC/AML</h1>
                    <h1>- Presale Launch</h1>
                </TextDiv>

                <VerticalLineDiv>
                    <RoadmapButton style={{fontSize: '64px'}}/>
                </VerticalLineDiv>
                <QuarterText>Q1 2022</QuarterText>

                <VerticalLineDiv>
                    <VerticalLine/>
                </VerticalLineDiv>
                <TextDiv>
                    <h1>- Misfits DeFi Token Sale</h1>
                    <h1>- DEX Listing</h1>
                </TextDiv>

                <VerticalLineDiv>
                    <RoadmapButton style={{fontSize: '64px'}}/>
                </VerticalLineDiv>
                <QuarterText>Q2 2022</QuarterText>

                <VerticalLineDiv>
                </VerticalLineDiv>
                <TextDiv>
                    <h1>- USA Misfits Delivery Platform Development</h1>
                    <h1>- Token Airdrops</h1>
                    <h1>- Marketing Campaigns</h1>
                </TextDiv>


            </MyGrid>
        </MainDiv>
    )
}

export default Roadmap