import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Sphere_1 = () => {
    const Sphere_1 = useGLTF('./models/Sphere_1.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Sphere_1.scene} />
            </mesh>
        </Float>
    )
}

export default Sphere_1