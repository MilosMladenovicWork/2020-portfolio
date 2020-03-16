import React, {useRef, useCallback, useState, useEffect} from "react"
import { Link } from "gatsby"
import {useSpring as useSpringThree} from 'react-spring/three'
import Background from "../components/background"
import Section from "../components/section"
import Button from "../components/button"
import Projects from '../components/projects'
import Form from '../components/form'
import VisibilitySensor from 'react-visibility-sensor'
import 'swiper/css/swiper.css'

import Layout from "../components/layout"
import testImage from "../images/test.jpg"
import SEO from "../components/seo"

function IndexPage(){
  const [section, setSection] = useState(0)
  const [offset, setOffset] = useState(0)
  const [colorArray, setColorArray] = useState(['#020042', '#020030', '#020020', '#020010'])
  const {color} = useSpringThree({color:colorArray[section]})




  const projects = [
    {
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
    },{
      image:testImage,
      name:'project'
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
            <h1>THIS IS SAMPLE TEXT.</h1>
            <p>This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
            This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
            </p>
            <Button to='#'>See My Work</Button>
          </div>
          <div className='scroll-down'>
            Scroll Down
          </div>
        </Section>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility={true} offset={{bottom:offset, top:offset}}  onChange={visibleSecondSection}>
        <Section id='about' style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between', paddingTop:'20vh'}}>
          <div className='centered' style={{width:"30vw"}}>
            <h1>THIS IS SAMPLE TEXT.</h1>
            <p>This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
            This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
            </p>
            <Button to='#'>See My Work</Button>
          </div>
          <div className='technologies'>
            <div className='technology'>

            </div>
            <div className='technology'>
              
            </div>
            <div className='technology'>
              
            </div>
            <div className='technology'>
              
            </div>
            <div className='technology'>

            </div>
            <div className='technology'>
              
            </div>
            <div className='technology'>
              
            </div>
            <div className='technology'>
              
            </div>
            <div className='technology'>

            </div>
            <div className='technology'>
              
            </div>
            <div className='technology'>
              
            </div>
          </div>
        </Section>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility={true} offset={{bottom:offset, top:offset}}  onChange={visibleThirdSection}>
        <Section id='projects' style={{flexDirection:'column', justifyContent:'flex-start',alignItems:'flex-start', paddingTop:'20vh'}}>
              <h1 style={{marginBottom:'10vh'}}>THIS IS SAMPLE TEXT.</h1>
              <div style={{width:'100%'}}>
                <Projects projects={projects}/>
              </div>
        </Section>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility={true} offset={{bottom:offset, top:offset}}  onChange={visibleFourthSection}>
        <Section id='contact' style={{flexDirection:'column', justifyContent:'flex-start',alignItems:'center', paddingTop:'20vh'}}>
          <div className='centered'>
            <h1 style={{marginBottom:'10vh', textAlign:'center'}}>THIS IS SAMPLE TEXT.</h1>
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
