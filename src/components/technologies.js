import React from 'react'
import html5 from '../images/technologies/html5.svg'
import css3 from '../images/technologies/css3.svg'
import javascript from '../images/technologies/javascript.svg'
import jquery from '../images/technologies/jquery.svg'
import react from '../images/technologies/react.svg'
import sass from '../images/technologies/sass.svg'
import nodejs from '../images/technologies/nodejs.svg'
import mongoDB from '../images/technologies/mongoDB.svg'

function Technologies(){
  return(
    <div className='technologies'>
      <div className='technology'>
        <img src={html5} title='HTML5'/>
      </div>
      <div className='technology'>
        <img src={css3} title='CSS3'/>
      </div>
      <div className='technology'>
        <img src={javascript} title='JavaScript'/>
      </div>
      <div className='technology'>
        <img src={jquery} title='JQuery'/>
      </div>
      <div className='technology'>
        <img src={react} title='React'/>
      </div>
      <div className='technology'>
        <img src={sass} title='Sass'/>
      </div>
      <div className='technology'>
        <img src={nodejs} title='Node.js'/>
      </div>
      <div className='technology'>
        <img src={mongoDB} title='mongoDB'/>
      </div>
    </div>
  )
}

export default Technologies