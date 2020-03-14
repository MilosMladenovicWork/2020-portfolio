import React, {useRef, useCallback, useState, useEffect} from "react"
import { Link } from "gatsby"
import {useSpring} from 'react-spring/three'
import Background from "../components/background"
import Section from "../components/section"
import Button from "../components/button"
import VisibilitySensor from 'react-visibility-sensor'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage(){
  const [section, setSection] = useState(0)
  const [offset, setOffset] = useState(0)
  const [colorArray, setColorArray] = useState(['#000f42', '#002828'])
  const {color} = useSpring({color:colorArray[section]})
  
  function visibleFirstSection (isVisible) {
    if(isVisible){
      setSection(0)
    }
    console.log('Element 1 is now %s', isVisible ? 'visible' : 'hidden');
  }
  function visibleSecondSection (isVisible) {
    if(isVisible){
      setSection(1)
    }
    console.log('Element 2 is now %s', isVisible ? 'visible' : 'hidden');
  }

  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  useEffect(() => {
    setOffset(window.innerHeight / 2)
  }, [window])
  
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
        <Section id='about' style={{flexDirection:'row',alignItems:'flex-start', paddingTop:'20vh'}}>
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
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </div>
)
}

export default IndexPage
