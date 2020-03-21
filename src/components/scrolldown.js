import React, {useState} from 'react'
import {useSpring, animated, config} from 'react-spring'
import mouseImg from '../images/mouse.svg'
import './scrolldown.css'

function ScrollDown({section}){
  const [resetAnim, setResetAnim] = useState(false)

  const springBounce = useSpring({
    from:{transform:'translateY(0px)'},
    to:[{transform:'translateY(-10px)'}, {transform:'translateY(0px)'}],
    onRest:() => {
      setResetAnim(true)
    },
    onStart:() => {
      setResetAnim(false)
    },
    reset:resetAnim,
    config:config.wobbly
  })

  const springDissapear = useSpring({opacity:section === 0 ? 1 : 0})

  return(
    <animated.div className='scroll-down' style={springDissapear}>
      <animated.img src={mouseImg} style={springBounce}/>
      Scroll Down
    </animated.div>
  )
}

export default ScrollDown