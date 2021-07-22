import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #070f1c;

    @media (max-width: 500px){
        height: 700px;
    }
    
`

const QuarterText = styled.h1`
    color: #4ec8ca;
    padding-bottom: 10px;
`


const SecondaryText = styled.h1`
    color: white;
    font-size: 10px;
    padding-bottom: 10px;
`

const QuarterContainers = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 80%;
    z-index: 2;
`

const Disclaimer = () => {


    return (
        <MainDiv>
            <QuarterContainers>
                <QuarterText>Disclaimer</QuarterText>
                <SecondaryText>The information provided in this document and the corresponding website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website’s content as such. The Misfits DeFi team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing Misfits DeFi (MFTS), you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token “as is” and is not required to provide any support or services. You should have no expectation of any form from Misfits DeFi and its team. Although Misfits DeFi (MFTS) is an EXPERIMENTAL token for social experiment and not a digital currency, the team strongly recommends that United States persons do not purchase it because the team cannot ensure compliance with United states regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.</SecondaryText>
                
                <SecondaryText>Please note there are always risks associated with smart-contracts. Please use at your own risk. Misfits DeFi Token is not a registered broker, analyst or investment advisor. Everything that we provide on this site is purely for guidance, informational and educational purposes. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks involved with any trading done in any financial market. Do not trade with money that you cannot afford to lose. When in doubt, you should consult a qualified financial advisor before making any investment decisions.</SecondaryText>
            </QuarterContainers>

        </MainDiv>
    )
}

export default Disclaimer

