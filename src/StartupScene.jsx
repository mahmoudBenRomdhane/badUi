import {useEffect} from "react";

export default function StartupScene(props) {
    useEffect(() => {
        setTimeout(() => {
            props.callback();
        }, 3000)
    })

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
        }}>
            <img style={{width: '100%', height: '100%'}} src="/xp.gif" alt=""/>
        </div>
    )
}