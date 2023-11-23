import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Ring_4 = () => {
    const Ring_4 = useGLTF('./models/Ring_4.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Ring_4.scene} />
            </mesh>
        </Float>
    )
}

export default Ring_4