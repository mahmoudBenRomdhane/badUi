import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartupScene from "./StartupScene.jsx";
import Login from "./Login.jsx";

function App() {
    const [showStartup, setShowStartup] = useState(true)
    const [showLogin, setShowLogin] = useState(true)

    if (showStartup) {
        return <StartupScene callback={() => setShowStartup(false)}/>;
    }

    if (showLogin) {
        return <Login callback={() => setShowLogin(false)}/>;
    }

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: "url('https://preview.redd.it/w6hb4pwm0fz31.jpg?auto=webp&s=6d776116d50759b6ee05adef0cadf5b7f33cc24b')",
            backgroundSize: "cover"
        }}>
            <progress max="100" value="70"></progress>
            <progress></progress>
        </div>
    )
}

export default App
