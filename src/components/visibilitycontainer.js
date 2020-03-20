import React, {useState, useEffect} from 'react'
import VisibilitySensor from 'react-visibility-sensor'

function VisibilityContainer({children, onChange}){

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOffset(window.innerHeight / 2)
  }, [])

  return(
    <VisibilitySensor onChange={onChange} offset={{bottom:offset, top:offset}} partialVisibility={true}>
      {children}
    </VisibilitySensor>
  )
}

export default VisibilityContainer