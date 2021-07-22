import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #070f1c;
    
`

const QuarterText = styled.h1`
    color: #4ec8ca
`

const PrimaryText = styled.h1`
    color: white;
`

const SecondaryText = styled.h1`
    color: white;
    font-size: 10px;
`

const QuarterContainers = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Token = () => {


    return (
        <MainDiv id="token">
            <QuarterContainers>
                <QuarterText>Tokenomics</QuarterText>
                <PrimaryText>Text</PrimaryText>
                <SecondaryText>To be defined</SecondaryText>
            </QuarterContainers>
        </MainDiv>
    )
}

export default Token