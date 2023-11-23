import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Ring_2 = () => {
    const Ring_2 = useGLTF('./models/Ring_2.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Ring_2.scene} />
            </mesh>
        </Float>
    )
}

export default Ring_2