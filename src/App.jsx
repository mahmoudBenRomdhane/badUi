import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartupScene from "./StartupScene.jsx";
import Login from "./Login.jsx";

function App() {
    const [showStartup, setShowStartup] = useState(true)
    const [showLogin, setShowLogin] = useState(true)
    const [showIE, setShowIE] = useState(false)
    const [age, setAge] = useState(30)
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    const [showBlueScreen, setShowBlueScreen] = useState(false)

    const btnContainer = useRef()


    if (showStartup) {
        return <StartupScene callback={() => setShowStartup(false)}/>;
    }

    if (showLogin) {
        return <Login callback={() => setShowLogin(false)}/>;
    }

    if (showBlueScreen) {
        return <BlueScreen/>
    }

    const onAgeChange = (ev) => {
        setAge(ev.target.value)
    }

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: "url('https://preview.redd.it/w6hb4pwm0fz31.jpg?auto=webp&s=6d776116d50759b6ee05adef0cadf5b7f33cc24b')",
            backgroundSize: "cover"
        }}>
            <div style={{width: 80, padding: 21}} onClick={() => setShowIE(true)}>
                <img style={{width: 80, height: 80}}
                     src="https://seeklogo.com/images/M/msn-boneco-logo-E03520C5F2-seeklogo.com.png"
                     alt=""/>
                <p style={{textAlign: 'center', color: 'white', fontSize: 18, margin: 0}}>
                    MSN
                </p>
            </div>


            {showIE && (
                <div style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="window" style={{width: 800, transform: `rotate(${age - 30}deg)`}}>
                        <div className="title-bar">
                            <div className="title-bar-text">Créer un compte MSN</div>
                            <div className="title-bar-controls">
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="window-body">
                            <div className="field-row-stacked" style={{width: 200}}>
                                <label htmlFor="text22">Nom complet</label>
                                <input id="text22" type="text" value={name}
                                       onChange={(ev) => setName(ev.target.value.split('').reverse().join(''))}/>
                            </div>

                            <div className="field-row">
                                <label htmlFor="text21">Métier</label>
                                <select>
                                    <option>Je ne travaille pas, je suis une princesse</option>
                                    <option>Je travaille chez Facebook</option>
                                    <option>Celui qui conduit un taxi</option>
                                    <option>Celui qui répare les ordinateurs</option>
                                    <option>Celui qui vend des légumes</option>
                                    <option>Celui qui cuisine</option>
                                    <option>Celui qui ne fait rien des choses mentionnées précédemment</option>
                                </select>
                            </div>
                            <div className="field-row" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                                <label htmlFor="range25">Age:</label>
                                <input id="range26" type="range" min="0" max="60" onChange={onAgeChange} value={age}/>
                                <label htmlFor="range25">{age}</label>
                            </div>

                            <div className="field-row" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                                <label htmlFor="text21">Mot de passe</label>
                                <input id="text21" type="text" value={password}
                                       onChange={(ev) => setPassword(ev.target.value)}/>
                                {
                                    password !== "0000" && password !== '' &&
                                    <p style={{color: 'red'}}>Nous n'acceptons pas les mots de passe différents de
                                        0000</p>

                                }
                            </div>

                            <label htmlFor="range25">Je suis un(e):</label>
                            <div className="field-row" style={{marginTop: '1rem',}}>
                                <input id="radio5" type="radio" name="first-example" onClick={() => setGender('female')}
                                       checked={gender === 'male'}/>
                                <label htmlFor="radio5">Homme</label>
                            </div>
                            <div className="field-row" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                                <input id="radio6" type="radio" name="first-example" onClick={() => setGender('male')}
                                       checked={gender === 'female'}/>
                                <label htmlFor="radio6">Femme</label>
                            </div>

                            <div className="field-row" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                                <input type="checkbox" id="example1" checked/>
                                <label htmlFor="example1">Je suis un robot</label>
                            </div>

                            <div ref={btnContainer}>

                                <button onClick={() => setShowBlueScreen(true)}>J'ai fini</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App


function BlueScreen() {

    useEffect(() => {
        const song = new Audio("https://www.myinstants.com/media/sounds/directed-by-robert-b_voI2Z4T.mp3");
        song.play();
    }, [])

    return <div className="blue-screen">
        <div className="sad-face">:(</div>
        <p className="upper">Nous sommes en 2024, même Bill Gates ne l'utilise plus</p>
        <p className="lower">si vous souhaitez en savoir plus, vous pouvez rechercher en ligne cette erreur : Proxela</p></div>
}