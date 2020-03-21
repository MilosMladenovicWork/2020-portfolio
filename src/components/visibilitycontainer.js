import React, {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

function VisibilityContainer({children, onChange, thisSection, section}){

  const [offset, setOffset] = useState(0)
  const springDissapear = useSpring({opacity:section === thisSection ? 1 : 0})

  useEffect(() => {
    setOffset(window.innerHeight / 2)
  }, [])

  return(
    <VisibilitySensor onChange={onChange} offset={{bottom:offset, top:offset}} partialVisibility={true}>
      <animated.div style={springDissapear}>
        {children}
      </animated.div>
    </VisibilitySensor>
  )
}

export default VisibilityContainer