import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'


const Cone_3 = () => {
    const Cone_3 = useGLTF('./models/Cone_3.glb')

    return (
        <Float
            speed={5}
            rotationIntensity={.1}
            floatIntensity={1}
            floatingRange={[.1, .1]}
        >
            <mesh castShadow receiveShadow >
                <primitive object={Cone_3.scene} />
            </mesh>
        </Float>
    )
}

export default Cone_3