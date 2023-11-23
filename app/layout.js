import './globals.scss'

export const metadata = {
    title: 'Kinetic Geometrix | Interactive 3D Web Experience',
    description: 'Dive into Kinetic Geometrix, where geometric shapes come alive with vibrant animations and user interaction. Built with the synergy of Next.js, Three.js, React Three Fiber, and GLSL shaders, this project is a showcase of creative coding and modern web technologies. Explore the seamless world of responsive 3D design and dynamic visual effects.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
