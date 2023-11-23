import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Background = () => {
    const Background = useGLTF('./models/Background.glb')

    return (
        <mesh castShadow receiveShadow >
        <primitive object={Background.scene} />
        </mesh>
    )
}

export default Background