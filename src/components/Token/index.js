import React from 'react';
import styled from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';
import './index.css';

const MainDiv = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #070f1c;

    z-index: 2;

    @media (max-width: 1000px){
        height: 1200px;
    }
    
`

const QuarterText = styled.h1`
    color: #4ec8ca;
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 100px;
    z-index: 2;
`

const PrimaryText = styled.h1`
    color: white;
    font-size: 24px;
`


const QuarterContainers = styled.div`
    padding: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MyGrid = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 10px;
    z-index: 2;

    @media (max-width: 1000px){
        grid-template-columns: 1fr;
    }
    justify-self: center;
    align-self: center;
`

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 10px;
    padding-left: 24px;

    @media (max-width: 1000px){
        padding-left: 0px;
    }
`

const PieChartContainer = styled.div`
    width: 400px;
    @media (max-width: 400px){
        width: 200px;
    }
`

const PieChartLabel = styled.h1`
    color: white;
    width: max-content;
    font-size: 16px;
    padding: 4px;
`


const Token = () => {

    const lineWidth = 40;

    return (
        <MainDiv id="token">
            <QuarterText>Tokenomics</QuarterText>

            <MyGrid>
                <QuarterContainers>
                    <PieChartContainer>
                        <PieChart
                            data={[
                                { title: 'One', value: 15, color: '#2e719a' },
                                { title: 'Two', value: 40, color: '#479bb4' },
                                { title: 'Three', value: 20, color: '#4ec8ca' },
                                { title: 'Four', value: 25, color: '#162152' },
                            ]}
                            lineWidth={40}
                            segmentsStyle={{ transition: 'stroke .3s' }}
                            style={{
                                fontFamily:
                                    '"Nunito Sans", sans-serif',
                                fontSize: '8px',
                                zIndex: '1',
                            }}
                            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                            labelPosition={100 - lineWidth / 2}
                            labelStyle={{
                                fill: '#fff',
                                opacity: 0.75,
                                pointerEvents: 'none',
                            }}
                        />;
                    </PieChartContainer>
                </QuarterContainers>
                <ColumnFlex>
                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '25px' }}>
                        <PrimaryText style={{ color: 'white', fontWeight: 'bold' }}>MFTS TOKEN</PrimaryText>
                        <hr style={{ height: '2px', width: '100px', borderWidth: '0', color: '#4ec8ca', backgroundColor: '#4ec8ca', marginLeft: '10px' }}></hr>
                    </div>
                    <PrimaryText style={{ color: 'white', fontSize: '14px', paddingBottom: '25px' }}>Total Token Supply: 1,000,000,000</PrimaryText>
                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '25px' }}>
                        <PrimaryText style={{ color: 'white', fontWeight: 'bold' }}>LEGEND</PrimaryText>
                        <hr style={{ height: '2px', width: '100px', borderWidth: '0', color: '#4ec8ca', backgroundColor: '#4ec8ca', marginLeft: '10px' }}></hr>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>
                        <div style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#2e719a', marginRight: '10px' }}></div>
                        <PieChartLabel>Pre-sale</PieChartLabel>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>
                        <div style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#479bb4', marginRight: '10px' }}></div>
                        <PieChartLabel>Public sale</PieChartLabel>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>
                        <div style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#4ec8ca', marginRight: '10px' }}></div>
                        <PieChartLabel>Team / Marketing</PieChartLabel>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>
                        <div style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#162152', marginRight: '10px' }}></div>
                        <PieChartLabel>Airdrops / Holding Rewards</PieChartLabel>
                    </div>


                </ColumnFlex>
            </MyGrid>

        </MainDiv>
    )
}

export default Token