import React from 'react'
import './button.css'

function Button({to:href, children, onClick, style}){

  return(
    <a href={href} className="button" onClick={(e) => onClick(e)} style={style}>
      {children}
    </a>
  )
}

export default Button 