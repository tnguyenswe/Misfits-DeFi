import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    
`

const QuarterText = styled.h1`
    color: black;
    font-size: 32px;
    padding-bottom: 30px;
`

const QuarterContainers = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    @media (max-width: 400px){
        grid-template-columns: 1fr;
    }

`

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
`

const StepText = styled.h1`
    font-size: 24px;
    padding-bottom: 10px;
`

const SmallerStepText = styled.h1`
    font-size: 20px;
    padding-bottom: 10px;
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
                        <StepText>Step 1:</StepText>
                        <StepText>Get $BNB on <a style={{textDecoration: 'underline'}} href="https://www.binance.com/en">Binance Exchange</a></StepText>
                    </ColumnFlex>
                    <ColumnFlex>
                        <StepText>Step 2:</StepText>
                        <StepText>Set up a wallet and send your BNB there</StepText>
                        <SmallerStepText>We recommend <a style={{textDecoration: 'underline'}} href="https://trustwallet.com/deeplink/">Trust Wallet</a></SmallerStepText>
                    </ColumnFlex>
                    <ColumnFlex>
                        <StepText>Step 3:</StepText>
                        <StepText>Join our launch to buy $MFTS</StepText>
                        <SmallerStepText>Swap BNB for MFTS on PancakeSwap (don't forget to set slippage to 12%!) </SmallerStepText>
                    </ColumnFlex>
                </MyGrid>
            </QuarterContainers>

            {/* <QuarterContainers>
                <QuarterText>Q4 2021</QuarterText>
                <PrimaryText>Development of token</PrimaryText>
                <PrimaryText>KYC/AML</PrimaryText>
            </QuarterContainers>

            <QuarterContainers>
                <QuarterText>Q1 2022</QuarterText>
                <PrimaryText>Misfits DeFi Token Sale</PrimaryText>
            </QuarterContainers>

            <QuarterContainers>
                <QuarterText>Q2 2022</QuarterText>
                <PrimaryText>USA Misfits Delivery Platform Development</PrimaryText>
            </QuarterContainers> */}
        </MainDiv>
    )
}

export default Invest