import React from 'react'
import './button.css'

function Button({to:href, children, onClick}){

  return(
    <a href={href} className="button">
      {children}
    </a>
  )
}

export default Button 