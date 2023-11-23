import { Text } from '@react-three/drei'

const Text_1 = () => {
    return (
        <Text
            font='https://fonts.googleapis.com/css2?family=Roboto'
            fontSize={ 0.65 }
            color="white"
            position-z={ 1.5 }
            position-y={ -6 }
            maxWidth={ 6 }
            textAlign="center"
            lineHeight={ 1.1 }
            letterSpacing={ 0.05 }
        >
            BESPOKE PROGRAMMING     Crafting Innovative Web Experiences
    </Text>
    )
}

export default Text_1