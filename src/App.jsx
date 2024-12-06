import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StartupScene from "./StartupScene.jsx";
import Login from "./Login.jsx";
import WinrarPopUp from "./WinrarPopUp.jsx";
import OceanPaint from "../public/paint.png";

function App() {
  const [showStartup, setShowStartup] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [showIE, setShowIE] = useState(false);
  const [showPaint, setShowPaint] = useState(false);
  const [age, setAge] = useState(30);
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [showBlueScreen, setShowBlueScreen] = useState(false);

  if (showStartup) {
    return <StartupScene callback={() => setShowStartup(false)} />;
  }

  if (showLogin) {
    return <Login callback={() => setShowLogin(false)} />;
  }

  if (showBlueScreen) {
    return <BlueScreen />;
  }

  const onAgeChange = (ev) => {
    setAge(ev.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "url('https://preview.redd.it/w6hb4pwm0fz31.jpg?auto=webp&s=6d776116d50759b6ee05adef0cadf5b7f33cc24b')",
        backgroundSize: "cover",
      }}
    >
      {showPaint && (
        <img
          alt="ocean"
          height={"70%"}
          src={OceanPaint}
          onClick={() => {
            setShowPaint(!showPaint);
          }}
        />
      )}
      <div style={{ width: 80, padding: 21 }} onClick={() => setShowIE(true)}>
        <img
          style={{ width: 80, height: 80 }}
          src="https://seeklogo.com/images/M/msn-boneco-logo-E03520C5F2-seeklogo.com.png"
          alt=""
        />
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 18,
            margin: 0,
          }}
        >
          MSN
        </p>
      </div>
      <div
        style={{ width: 80, padding: 21 }}
        onClick={() => setShowPaint(true)}
      >
        <img
          style={{ width: 80, height: 80 }}
          src="https://www.svgrepo.com/show/448218/digital-ocean.svg"
          alt=""
        />
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 18,
            margin: 0,
          }}
        >
          OCEAN
        </h1>
      </div>

      <PopUp />

      {showIE && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="window"
            style={{ width: 800, transform: `rotate(${age - 30}deg)` }}
          >
            <div className="title-bar">
              <div className="title-bar-text">Créer un compte MSN</div>
              <div className="title-bar-controls">
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              <div className="field-row-stacked" style={{ width: 200 }}>
                <label htmlFor="text22">Nom complet</label>
                <input
                  id="text22"
                  type="text"
                  value={name}
                  onChange={(ev) =>
                    setName(ev.target.value.split("").reverse().join(""))
                  }
                />
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
                  <option>
                    Celui qui ne fait rien des choses mentionnées précédemment
                  </option>
                </select>
              </div>
              <div
                className="field-row"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <label htmlFor="range25">Age:</label>
                <input
                  id="range26"
                  type="range"
                  min="0"
                  max="60"
                  onChange={onAgeChange}
                  value={age}
                />
                <label htmlFor="range25">{age}</label>
              </div>

              <div
                className="field-row"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <label htmlFor="text21">Mot de passe</label>
                <input
                  id="text21"
                  type="text"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                {password !== "0000" && password !== "" && (
                  <p style={{ color: "red" }}>
                    Nous n'acceptons pas les mots de passe différents de 0000
                  </p>
                )}
              </div>

              <label htmlFor="range25">Je suis un(e):</label>
              <div className="field-row" style={{ marginTop: "1rem" }}>
                <input
                  id="radio5"
                  type="radio"
                  name="first-example"
                  onClick={() => setGender("female")}
                  checked={gender === "male"}
                />
                <label htmlFor="radio5">Homme</label>
              </div>
              <div
                className="field-row"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <input
                  id="radio6"
                  type="radio"
                  name="first-example"
                  onClick={() => setGender("male")}
                  checked={gender === "female"}
                />
                <label htmlFor="radio6">Femme</label>
              </div>

              <div
                className="field-row"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <input type="checkbox" id="example1" checked />
                <label htmlFor="example1">Je suis un robot</label>
              </div>

              <div>
                <button
                  style={{ color: "black" }}
                  onClick={() => setShowBlueScreen(true)}
                >
                  J'ai fini
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: "#245edc",
          background:
            "linear-gradient(to bottom, #245edc 0%, #3f8cf3 9%, #245edc 18%, #245edc 92%, #1941a5 100%) center/cover no-repeat",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "32px",
        }}
      >
        <div
          style={{
            height: "100%",
            float: "left",
            fontSize: "22px",
            lineHeight: "22px",
            fontWeight: "bold",
            fontStyle: "italic",
            background:
              "radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover no-repeat",
            boxShadow: "0px 5px 10px #79ce71 inset, 4px 0 8px #3f8cf3",
            padding: "2px 25px 6px 10px",
            textShadow: "1px 1px 3px #222",
            borderRadius: "0px 8px 8px 0px",
            marginRight: "16px",
            cursor: "pointer",
            color: "white",
          }}
        >
          <img
            src="/win.jpeg"
            alt="Logo"
            style={{
              height: "20px",
              filter: "drop-shadow(1px 1px 1px #222)",
              transform: "translateY(4px)",
            }}
          />{" "}
          start
        </div>

        <div
          style={{
            width: "calc(100% - 225px)",
            float: "left",
          }}
        ></div>

        <div
          style={{
            height: "100%",
            float: "right",
            fontFamily: "calibri, monospace",
            fontSize: "14px",
            lineHeight: "14px",
            background:
              "linear-gradient(to bottom, #1290e9 0%, #19b9f3 9%, #1290e9 18%, #1290e9 92%, #1941a5 100%) center/cover no-repeat",
            boxShadow: "0px 5px 10px #14a5f0 inset, 0px 5px 10px #333333",
            padding: "9px 15px 9px 25px",
            borderLeft: "1px solid #092e51",
            textShadow: "1px 1px 2px #222",
            cursor: "pointer",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          4:43 pm
        </div>
      </div>
    </div>
  );
}

export default App;

function BlueScreen() {
  useEffect(() => {
    const song = new Audio(
      "https://www.myinstants.com/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    );
    song.play();
  }, []);

  return (
    <div className="blue-screen">
      <WinrarPopUp />
      <div className="sad-face">:(</div>
      <p className="upper">
        Nous sommes en 2024, même Bill Gates ne l'utilise plus
      </p>
      <p className="lower">
        si vous souhaitez en savoir plus, vous pouvez rechercher en ligne cette
        erreur : Proxela
      </p>
    </div>
  );
}

function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  if (!showPopup) return null;

  return <WinrarPopUp />;
}
