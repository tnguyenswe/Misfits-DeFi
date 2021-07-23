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
    font-size: 20px;
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
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 50px;
    grid-row-gap: 10px;

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
    border: 2px solid #d3d3d3;
    padding: 10px;
    background-color: white;
`

const PieChartContainer = styled.div`
    width: 400px;
    @media (max-width: 400px){
        width: 200px;
    }
`

const Token = () => {

    const lineWidth = 40;

    return (
        <MainDiv id="token">
            <QuarterText>Tokenomics</QuarterText>

            <MyGrid>
                <QuarterContainers>
                    <PrimaryText>Total Tokens (MFTS)</PrimaryText>
                    <PrimaryText style={{ paddingBottom: '50px' }}>1,000,000,000 Supply</PrimaryText>
                    <PieChartContainer>
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#2e719a' },
                            { title: 'Two', value: 15, color: '#479bb4' },
                            { title: 'Three', value: 20, color: '#4ec8ca' },
                            { title: 'Four', value: 20, color: '#162152' },
                            { title: 'Five', value: 20, color: '#1b4879' },
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
                    <h1 style={{backgroundColor: 'blue'}}>Hello world</h1>
                </ColumnFlex>
            </MyGrid>

        </MainDiv>
    )
}

export default Token