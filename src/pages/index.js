import React, {useRef, useCallback, useState, useEffect} from "react"
import { Link } from "gatsby"
import {useSpring as useSpringThree} from 'react-spring/three'
import Background from "../components/background"
import Section from "../components/section"
import Button from "../components/button"
import Projects from '../components/projects'
import Form from '../components/form'
import Technologies from '../components/technologies'
import VisibilitySensor from 'react-visibility-sensor'
import 'swiper/css/swiper.css'

import Layout from "../components/layout"
import testImage from "../images/projects/perun.png"
import perun from '../images/projects/perun.png'
import movieZone from '../images/projects/moviezone.png'
import realEstate from '../images/projects/realestate.png'
import cosmoBakery from '../images/projects/cosmobakery.png'
import mimsMuscle from '../images/projects/mimsmuscle.png'
import cozyHut from '../images/projects/cozyhut.png'
import SEO from "../components/seo"

function IndexPage(){
  const [section, setSection] = useState(0)
  const [offset, setOffset] = useState(0)
  const [colorArray, setColorArray] = useState(['#000042', '#000030', '#000020', '#000010'])
  const {color} = useSpringThree({color:colorArray[section]})




  const projects = [
    {
      projectName:'Perun',
      image:perun,
      address:'https://perunperun.netlify.com'
    },
    {
      projectName:'Movie Zone',
      image:movieZone,
      address:'https://moviezonemovie.netlify.com'
    },
    {
      projectName:'Real Estate',
      image:realEstate,
      address:'https://realestatereal.netlify.com'
    },
    {
      projectName:'Cosmo Bakery',
      image:cosmoBakery,
      address:'https://cosmobakery.netlify.com'
    },
    {
      projectName:'MIMS Muscle',
      image:mimsMuscle,
      address:'https://mimsmuscle.netlify.com'
    },
    {
      projectName:'Cozy Hut',
      image:cozyHut,
      address:'https://cozy-hut.netlify.com/'
    },
  ]

  function visibleFirstSection (isVisible) {
    if(isVisible){
      setSection(0)
    }
  }
  function visibleSecondSection (isVisible) {
    if(isVisible){
      setSection(1)
    }
  }

  function visibleThirdSection (isVisible) {
    if(isVisible){
      setSection(2)
    }
  }

  function visibleFourthSection (isVisible) {
    if(isVisible){
      setSection(3)
    }
  }

  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  useEffect(() => {
    setOffset(window.innerHeight / 2)
  }, [])
  
return(
  <div onMouseMove={onMouseMove}>
    <Layout>
      <SEO title="Home" />
      <Background mouse={mouse} color={color}/>
      <VisibilitySensor onChange={visibleFirstSection} offset={{bottom:offset, top:offset}} partialVisibility={true}>
        <Section id='home'>
          <div class='centered'>
            <h1>I CREATE STUNNING WEBSITES!</h1>
            <p>My name is Milos Mladenovic. I am a Front End Web developer with passion in building websites.
            </p>
            <Button to='#projects'>See My Work</Button>
          </div>
          <div className='scroll-down'>
            Scroll Down
          </div>
        </Section>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility={true} offset={{bottom:offset, top:offset}}  onChange={visibleSecondSection}>
        <Section id='about' style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between', paddingTop:'20vh'}}>
          <div className='centered' style={{width:"30vw"}}>
            <h1>ABOUT ME</h1>
            <p>This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
            This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
            </p>
            <Button to='#contact'>Contact Me</Button>
          </div>
          <Technologies />
        </Section>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility={true} offset={{bottom:offset, top:offset}}  onChange={visibleThirdSection}>
        <Section id='projects' style={{flexDirection:'column', justifyContent:'flex-start',alignItems:'flex-start', paddingTop:'20vh'}}>
              <h1 style={{marginBottom:'10vh'}}>MY PROJECTS</h1>
              <div style={{width:'100%'}}>
                <Projects projects={projects}/>
              </div>
        </Section>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility={true} offset={{bottom:offset, top:offset}}  onChange={visibleFourthSection}>
        <Section id='contact' style={{flexDirection:'column', justifyContent:'flex-start',alignItems:'center', paddingTop:'20vh'}}>
          <div className='centered'>
            <h1 style={{marginBottom:'10vh', textAlign:'center'}}>CONTACT ME</h1>
            <Form/>
          </div>
        </Section>
      </VisibilitySensor>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </div>
)
}

export default IndexPage
