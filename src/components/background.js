import React, {useCallback, useRef} from 'react'
import { Canvas } from 'react-three-fiber'
import { animated } from 'react-spring/three'
import Swarm from '../components/swarm'
import Effect from '../components/effect'
import './background.css'

function Background({mouse, color}){

  return(
    <div className={"canvas-container"} >
      <Canvas camera={{ fov: 75, position: [0, 0, 70] }}>
        <pointLight distance={10} intensity={2} color="white" />
        <spotLight intensity={0.5} position={[0, 0, 70]} penumbra={1} color="lightblue" />
        <mesh>
          <planeBufferGeometry attach="geometry" args={[10000, 10000]} />
          <animated.meshPhongMaterial attach="material" depthTest={false} color={color}/>
        </mesh>
        <Swarm mouse={mouse} count={5000} color={color}/>
        <Effect />
      </Canvas>
    </div>
  )
}

export default Background