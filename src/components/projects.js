import React, {useState} from 'react'
import Swiper from 'react-id-swiper'
import {useSpring, animated} from 'react-spring'
import './projects.css'



function Projects({projects}){
  const [transform, set, stop] = useSpring(()=>({transform:`scale(1) rotateX(0deg) rotateY(0deg)`, delay:200, config: { mass: 5, tension: 350, friction: 40 }}))
  const [active, setActive] = useState(0)
  
  
  const swiperProps = {
    slidesPerView:'auto',
    initialSlide:0,
    centeredSlides:true,
    spaceBetween:150,
    on:{
      slideChange:function(){
        setActive(this.activeIndex)
      },
      sliderMove:function(){
        set({transform:`scale(1) rotateX(0deg) rotateY(0deg)`})
      }
    }
  }

  
  return(
    
    <Swiper {...swiperProps}>
    {
      projects.map((project, index) => 
      <animated.div className='project' style={active === index ? transform : null}
        onPointerOut={() => set({transform:`scale(1) rotateX(0deg) rotateY(0deg)`})}
        onMouseMove={function({clientX:x,clientY:y}){active === index && set({transform:`scale(1.2) rotateX(${-(y - window.innerHeight / 2) / 10}deg) rotateY(${(x - window.innerWidth / 2)/10}deg)`}); console.log(x)}}
        >
        <img src={project.image}/>
      </animated.div>)
    }
  </Swiper>
  )
}

export default Projects