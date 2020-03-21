import React from 'react'
import VisibilityContainer from '../components/visibilitycontainer'
import Section from '../components/section'
import Form from '../components/form'

function ContactArea({onChange, section}){
  return(
    <VisibilityContainer onChange={onChange} section={section} thisSection={3}>
      <Section id='contact'>
        <div className='centered'>
          <h1 style={{marginBottom:'10vh', textAlign:'center'}}>CONTACT ME</h1>
          <Form/>
        </div>
      </Section>
    </VisibilityContainer>
  )
}

export default ContactArea