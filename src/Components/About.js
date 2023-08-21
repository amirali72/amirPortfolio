import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            <b>Amir Ali</b>  here an aspiring tech architect, molding digital dreams into reality. Armed with code and creativity, I navigate the digital realm, fusing C/C++, Java, and JavaScript to build virtual wonders. My toolkit extends beyond languages ReactJS, NodeJS, Express and more sculpting user-centric experiences. Beyond the screen, I'm a maestro of leadership, a navigator of innovation, and a composer of teamwork. From sparking life into web apps to crafting a digital footprint at The Sparks Foundation, I'm not just coding; I'm crafting tomorrow's digital tapestry.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Python' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />

      </div>
    </>
  )
}

export default About