import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Sphere_2 = () => {
    const Sphere_2 = useGLTF('./models/Sphere_2.glb')

    return (
            <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Sphere_2.scene} />
            </mesh>
        </Float>
    )
}

export default Sphere_2