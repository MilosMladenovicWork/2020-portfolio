import React from 'react'
import VisibilityContainer from '../components/visibilitycontainer'
import Section from '../components/section'
import Button from '../components/button'
import ScrollDown from '../components/scrolldown'


function Home({onChange, section}){

  return(
    <VisibilityContainer onChange={onChange} section={section} thisSection={0}>
      <Section id='home'>
        <div className='centered'>
          <h1>I CREATE STUNNING WEBSITES!</h1>
          <p>My name is Milos Mladenovic. I am a Front End Web developer with passion in building websites.
          </p>
          <Button to='#projects'>See My Work</Button>
        </div>
        <ScrollDown section={section}/>
      </Section>
    </VisibilityContainer>
  )
}

export default Home