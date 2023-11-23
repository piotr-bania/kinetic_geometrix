import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Cone_4 = () => {
    const Cone_4 = useGLTF('./models/Cone_4.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Cone_4.scene} />
            </mesh>
        </Float>
    )
}

export default Cone_4