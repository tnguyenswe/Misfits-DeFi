import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, NewHeroImage } from './HeroElements';
import Video from '../../videos/video.mp4';
import {Link1} from '../ButtonElements';
import HeroImage from '../../images/misfits-logo.png';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} className="hidden sm:flex" type='video/mp4' /> */}
            </HeroBg>
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
        </HeroContainer>
    )
}

export default HeroSection
