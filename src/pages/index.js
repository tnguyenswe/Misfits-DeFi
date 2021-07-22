import React, {useState, useEffect} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne} from '../components/InfoSection/Data'
import Invest from '../components/Invest'
import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap'
import Sidebar from '../components/Sidebar'
import Token from '../components/Token'
import Particles from 'react-particles-js';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Disclaimer from '../components/Disclaimer';
import Aos from "aos";
import 'aos/dist/aos.css';


const NewParticle = styled(Particles)`
    position: fixed !important;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const particlesOptions = {
    particles: {
      number: {
        value: 15,
      },
      line_linked: {
        shadow: {
          enable: true,
        }
      }
    }
  }

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);


    return (
        <div>
            <NewParticle className="invisible sm:visible"/>
            <NewParticle className="sm:invisible" params={particlesOptions}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection id="home"/>
            <InfoSection data-aos="fade-up" {...homeObjOne}/>
            <Roadmap id="roadmap"/>
            <Token id="token"/>
            <Invest id="invest"/>
            <Disclaimer/>
            <Footer />
            {/* <InfoSection {...homeObjTwo}/> */}
            {/* <InfoSection {...homeObjThree}/> */}
        </div>
    )
}

export default Home
