import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Sphere_4 = () => {
    const Sphere_4 = useGLTF('./models/Sphere_4.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Sphere_4.scene} />
            </mesh>
        </Float>
    )
}

export default Sphere_4