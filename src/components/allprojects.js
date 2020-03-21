import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import Section from '../components/section'
import Projects from '../components/projects'
import VisibilityContainer from '../components/visibilitycontainer'

import perun from '../images/projects/perun.png'
import movieZone from '../images/projects/moviezone.png'
import realEstate from '../images/projects/realestate.png'
import cosmoBakery from '../images/projects/cosmobakery.png'
import mimsMuscle from '../images/projects/mimsmuscle.png'
import cozyHut from '../images/projects/cozyhut.png'


function AllProjects({onChange, section}){

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

  return(
    <VisibilityContainer onChange={onChange} section={section} thisSection={2}>
      <Section id='projects'>
            <h1 style={{marginBottom:'10vh'}}>MY PROJECTS</h1>
            <div style={{width:'100%'}}>
              <Projects projects={projects}/>
            </div>
      </Section>
    </VisibilityContainer>
  )
}

export default AllProjects