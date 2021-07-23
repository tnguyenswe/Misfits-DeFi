import React, {useState} from 'react';
// import { HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, NewHeroImage } from './HeroElements';
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, NewHeroImage } from './HeroElements';
import {Link1} from '../ButtonElements';
import HeroImage from '../../images/misfits-logo.png';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #070f1c;
    z-index: 2;
    padding-bottom: 100px;

    @media (max-width: 500px) {
        height: 800px;
        padding: 0;
        padding-bottom: 400px;
        padding-top: 400px;
    }


    
`

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <MainDiv id="home">
            {/* <HeroBg>
                <VideoBg autoPlay loop muted src={Video} className="hidden sm:flex" type='video/mp4' />
            </HeroBg> */}
            <HeroContent>
                <NewHeroImage src={HeroImage} alt="" className="min-w-0 w-3/12"/>
                <HeroH1>Misfits DeFi</HeroH1>
                <HeroP>Preventing food waste and delivering low cost groceries.</HeroP>
                <HeroBtnWrapper>
                    <Link1 href="https://drive.google.com/file/d/19z9foncYtzas3w8BPg81GEcDGHEtIMz2/view" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Learn More {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Link1>
                </HeroBtnWrapper>
            </HeroContent>
        </MainDiv>
    )
}

export default HeroSection
