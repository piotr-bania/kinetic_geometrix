import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Star = () => {
    const Star = useGLTF('./models/Star.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Star.scene} />
            </mesh>
        </Float>
    )
}

export default Star