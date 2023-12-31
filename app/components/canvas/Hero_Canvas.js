'use client'

import './hero_canvas.scss'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import Experience from '../experience/Experience'
import { DepthOfField, EffectComposer, Autofocus, Bloom } from '@react-three/postprocessing'

const Hero_Canvas = () => {
    return (
        <AnimatePresence>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                className='hero_canvas'
            >
                <Canvas shadows >
                    <PerspectiveCamera
                        makeDefault
                        position={[Math.PI * 0, 0, 25]}
                        fov={40}
                    />

                    <Environment
                        files='./environment/blue_photo_studio_1k.hdr'
                        background
                        blur={0.5}
                    />

                    <ambientLight intensity={.5} />

                    <directionalLight
                        castShadow
                        shadow-mapSize={[2048, 2048]}
                        intensity={1}
                        position={[2, 2, -2]}
                    />

                    {/* <OrbitControls
                        // autoRotate
                        autoRotateSpeed={-.25}
                        // reverseHorizontalOrbit
                        rotateSpeed={0.1}
                        enablePan={false}
                        // enableZoom={false}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 2}
                        minAzimuthAngle={-Math.PI / 2.5}
                        maxAzimuthAngle={Math.PI / 2}
                        minDistance={15}
                        maxDistance={20}
                        enableDamping={true}
                        dampingFactor={0.05}
                    /> */}

                    <EffectComposer>
                        <Bloom
                            intensity={1}
                            blurPass={undefined}
                            luminanceThreshold={0.9}
                            luminanceSmoothing={0.025}
                            mipmapBlur={false}
                        />
                        <Experience />
                    </EffectComposer>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Hero_Canvas