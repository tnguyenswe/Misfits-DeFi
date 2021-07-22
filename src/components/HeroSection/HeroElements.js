import styled, {keyframes} from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    padding-bottom: 200px;
    position: relative;
    margin-top: 80px;
    background-color: #070f1c;

    


    @media (max-width: 500px) {
        height: 800px;
        padding: 0;
        padding-bottom: 400px;
        padding-top: 300px;
    }

    @media (min-width: 600px){
        z-index: 2;
    }


    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180 deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }

`

/* Add :before styles */

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #070f1c;

    @media (max-width 500px){
        z-index: 2;
    }

`

export const HeroBg2 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 2;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MoveInBottom = keyframes`
    0% {
      opacity: 0;
      transform: translateY(3rem); }
    100% {
      opacity: 1;
      transform: translate(0); } 
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-weight: 700;

    animation-name: ${MoveInBottom};
    animation-duration: 1s;
    animation-iteration-count: 1;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }


`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    animation-name: ${MoveInBottom};
    animation-duration: 1s;
    animation-iteration-count: 1;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-name: ${MoveInBottom};
    animation-duration: 1s;
    animation-iteration-count: 1;

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;

`

export const NewHeroImage = styled.img`

    animation-name: ${MoveInBottom};
    animation-duration: 1s;
    animation-iteration-count: 1;
`