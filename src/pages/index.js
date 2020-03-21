import React, {useRef, useCallback, useState, useEffect} from "react"
import { Link } from "gatsby"
import {useSpring as useSpringThree} from 'react-spring/three'
import Background from "../components/background"
import Section from "../components/section"
import Button from "../components/button"
import Projects from '../components/projects'
import Form from '../components/form'
import Technologies from '../components/technologies'
import Home from '../components/home'
import About from '../components/about'
import AllProjects from '../components/allprojects'
import ContactArea from '../components/contactarea'
import VisibilitySensor from 'react-visibility-sensor'
import 'swiper/css/swiper.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage(){
  const [section, setSection] = useState(0)
  const [colorArray, setColorArray] = useState(['#000042', '#000030', '#000020', '#000010'])
  const {color} = useSpringThree({color:colorArray[section]})

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

  
return(
  <div onMouseMove={onMouseMove}>
    <Layout>
      <SEO title="Home" />
      <Background mouse={mouse} color={color}/>
      <Home onChange={visibleFirstSection} section={section}/>
      <About onChange={visibleSecondSection} section={section}/>
      <AllProjects onChange={visibleThirdSection} section={section}/>
      <ContactArea onChange={visibleFourthSection} section={section}/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </div>
)
}

export default IndexPage
