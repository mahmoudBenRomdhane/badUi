import './login.css'
import {useEffect} from "react";

export default function Login(props) {
    useEffect(() => {
        setTimeout(() => {
            props.callback();
        }, 3000)
    })

    return (
        <>
            <header></header>
            <main>
                <div className="img">
                    <img width={150} src="https://seeklogo.com/images/M/Microsoft_Windows_XP-logo-96036984F2-seeklogo.com.png" alt="Logo do Windows XP"/>
                </div>
                <div className="line"></div>
                <div className="users">
                    <section className="lucas">
                        <div className="iconA">
                            <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXSht9snxwDls7sVgHd6oCUV5LGBbYEjV3g&s" alt=""/>
                        </div>
                        <div className="user">
                            <h3>Al pacino</h3>
                            <p>Al Pacino n'a pas besoin de mot de passe...</p>
                        </div>
                    </section>
                </div>
            </main>
            <footer>
            </footer>
        </>
    )
}