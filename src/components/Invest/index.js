import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #070f1c;

    @media (max-width: 450px){
        height: 1300px;
    }
    
`

const QuarterText = styled.h1`
    color: white;
    font-size: 32px;
    padding-bottom: 30px;
`

const QuarterContainers = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const TitleText = styled.h1`
    padding-bottom: 50px;
    font-weight: 700;
    color: #4ec8ca;
    font-size: 32px;
    justify-self: center;
`

const MyGrid = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 20px;

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }

`

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    // border: 2px solid #d3d3d3;
    padding: 10px;
`

const StepText = styled.h1`
    font-size: 24px;
    padding-bottom: 10px;
    color: white;
`

const TealStepText = styled.h1`
    font-size: 24px;
    padding-bottom: 10px;
    color: #4ec8ca;
    font-weight: bold;
`

const SmallerStepText = styled.h1`
    font-size: 20px;
    padding-bottom: 10px;
    color: white;
`

const ContainerDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`

const Invest = () => {


    return (
        <MainDiv id="invest">
            <QuarterContainers>
                <TitleText>Where to invest?</TitleText>
                <ContainerDiv>
                <QuarterText>We plan on launching a pre-sale in Q4 2021, however.. once we list on a DEX:</QuarterText>
                </ContainerDiv>
                <MyGrid>
                    <ColumnFlex>
                        <TealStepText>Step 1:</TealStepText>
                        <StepText>Get $BNB on <a style={{textDecoration: 'underline'}} href="https://www.binance.com/en">Binance Exchange</a></StepText>
                    </ColumnFlex>
                    <ColumnFlex>
                        <TealStepText>Step 2:</TealStepText>
                        <StepText>Set up a wallet and send your BNB there</StepText>
                        <SmallerStepText>We recommend <a style={{textDecoration: 'underline'}} href="https://trustwallet.com/deeplink/">Trust Wallet</a></SmallerStepText>
                    </ColumnFlex>
                    <ColumnFlex>
                        <TealStepText>Step 3:</TealStepText>
                        <StepText>Join our launch to buy $MFTS</StepText>
                        <SmallerStepText>Swap BNB for MFTS on PancakeSwap (don't forget to set slippage to 12%!) </SmallerStepText>
                    </ColumnFlex>
                </MyGrid>
            </QuarterContainers>
        </MainDiv>
    )
}

export default Invest