import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Cone_1 = () => {
    const Cone_1 = useGLTF('./models/Cone_1.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Cone_1.scene} />
            </mesh>
        </Float>
    )
}

export default Cone_1