import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Pen_2 = () => {
    const Pen_2 = useGLTF('./models/Pen_2.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Pen_2.scene} />
            </mesh>
        </Float>
    )
}

export default Pen_2