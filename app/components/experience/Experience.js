import Background from "../models/Background"
import Cone_1 from "../models/Cone_1"
import Cone_2 from "../models/Cone_2"
import Cone_3 from "../models/Cone_3"
import Cone_4 from "../models/Cone_4"
import Pen_1 from "../models/Pen_1"
import Pen_2 from "../models/Pen_2"
import Pen_3 from "../models/Pen_3"
import Piece from "../models/Piece"
import Ring_1 from "../models/Ring_1"
import Ring_2 from "../models/Ring_2"
import Ring_3 from "../models/Ring_3"
import Ring_4 from "../models/Ring_4"
import Ring_5 from "../models/Ring_5"
import Ring_6 from "../models/Ring_6"
import Sphere_1 from "../models/Sphere_1"
import Sphere_2 from "../models/Sphere_2"
import Sphere_3 from "../models/Sphere_3"
import Sphere_4 from "../models/Sphere_4"
import Sphere_5 from "../models/Sphere_5"
import Sphere_6 from "../models/Sphere_6"
import Star from "../models/Star"
import Text_1 from "../text/Text_1"
import { Float } from '@react-three/drei'

const Experience = () => {
    return (
        <Float
        speed={5}
        rotationIntensity={.1}
        floatIntensity={1}
        floatingRange={[.1, .1]}
    >
            <Background />
            <group scale={1}>
                <Cone_1 />
                <Cone_2 />
                <Cone_3 />
                <Cone_4 />
                <Pen_1 />
                <Pen_2 />
                <Pen_3 />
                <Piece />
                <Ring_1 />
                <Ring_2 />
                <Ring_3 />
                <Ring_4 />
                <Ring_5 />
                <Ring_6 />
                <Sphere_1 />
                <Sphere_2 />
                <Sphere_3 />
                <Sphere_4 />
                <Sphere_5 />
                <Sphere_6 />
                <Star />
            </group>
            {/* <Text_1 /> */}
        </Float>
    )
}

export default Experience