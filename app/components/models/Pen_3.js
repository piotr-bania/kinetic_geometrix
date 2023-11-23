import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Pen_3 = () => {
    const Pen_3 = useGLTF('./models/Pen_3.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Pen_3.scene} />
            </mesh>
        </Float>
    )
}

export default Pen_3