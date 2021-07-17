import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne} from '../components/InfoSection/Data'
import Invest from '../components/Invest'
import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap'
import Sidebar from '../components/Sidebar'
import Token from '../components/Token'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection id="home"/>
            <InfoSection {...homeObjOne}/>
            <Roadmap id="roadmap"/>
            <Token id="token"/>
            <Invest id="invest"/>
            {/* <InfoSection {...homeObjTwo}/> */}
            {/* <InfoSection {...homeObjThree}/> */}
        </div>
    )
}

export default Home
