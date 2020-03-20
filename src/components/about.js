import React from 'react'
import VisibilityContainer from '../components/visibilitycontainer'
import Section from '../components/section'
import Button from '../components/button'
import Technologies from '../components/technologies'
import './about.css'

function About({onChange}){
  return(
    <VisibilityContainer onChange={onChange}>
      <Section id='about'>
        <div className='centered'>
          <h1>ABOUT ME</h1>
          <p>This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
          This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. This is small sample text. 
          </p>
          <Button to='#contact'>Contact Me</Button>
        </div>
        <Technologies />
      </Section>
    </VisibilityContainer>
  )
}

export default About