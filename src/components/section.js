import React from 'react'
import './section.css'

function Section({children, style, id}){

  return(
    <section id={`${id}`} style={style}>
      {children}
    </section>
  )
}

export default Section