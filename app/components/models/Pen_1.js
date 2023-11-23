import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Pen_1 = () => {
    const Pen_1 = useGLTF('./models/Pen_1.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Pen_1.scene} />
            </mesh>
        </Float>
    )
}

export default Pen_1