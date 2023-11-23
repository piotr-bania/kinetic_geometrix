import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Piece = () => {
    const Piece = useGLTF('./models/Piece.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Piece.scene} />
            </mesh>
        </Float>
    )
}

export default Piece