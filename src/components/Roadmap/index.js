import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

const QuarterText = styled.h1`
    color: #4ec8ca
`

const QuarterContainers = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Roadmap = () => {


    return (
        <MainDiv id="roadmap">
            <QuarterContainers>
                <QuarterText>Q3 2021</QuarterText>
                <h1>Launch of Misfits DeFi website</h1>
                <h1>White Paper established</h1>
            </QuarterContainers>

            <QuarterContainers>
                <QuarterText>Q4 2021</QuarterText>
                <h1>Development of token</h1>
                <h1>KYC/AML</h1>
            </QuarterContainers>

            <QuarterContainers>
                <QuarterText>Q1 2022</QuarterText>
                <h1>Misfits DeFi Token Sale</h1>
            </QuarterContainers>

            <QuarterContainers>
                <QuarterText>Q2 2022</QuarterText>
                <h1>USA Misfits Delivery Platform Development</h1>
            </QuarterContainers>
        </MainDiv>
    )
}

export default Roadmap