import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Ring_1 = () => {
    const Ring_1 = useGLTF('./models/Ring_1.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Ring_1.scene} />
            </mesh>
        </Float>
    )
}

export default Ring_1