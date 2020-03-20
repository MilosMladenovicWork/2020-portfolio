import React from 'react'
import VisibilityContainer from '../components/visibilitycontainer'
import Section from '../components/section'
import Button from '../components/button'


function Home({onChange}){
  return(
    <VisibilityContainer onChange={onChange}>
      <Section id='home'>
        <div className='centered'>
          <h1>I CREATE STUNNING WEBSITES!</h1>
          <p>My name is Milos Mladenovic. I am a Front End Web developer with passion in building websites.
          </p>
          <Button to='#projects'>See My Work</Button>
        </div>
        <div className='scroll-down'>
          Scroll Down
        </div>
      </Section>
    </VisibilityContainer>
  )
}

export default Home