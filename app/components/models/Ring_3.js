import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Ring_3 = () => {
    const Ring_3 = useGLTF('./models/Ring_3.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Ring_3.scene} />
            </mesh>
        </Float>
    )
}

export default Ring_3