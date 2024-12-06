import React, { useEffect, useState } from "react";

function WinrarPopUp() {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const song = new Audio(
      "https://www.myinstants.com/media/sounds/une-menace-a-ete-detectee-video-officielles.mp3"
    );
    song.play();
  }, []);

  return showPopup ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 20,
        right: 0,
        bottom: 20,
      }}
    >
      <div className="window" style={{ width: "350px" }}>
        <div className="title-bar">
          <div className="title-bar-text">
            <p style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/winrar.jpeg"
                alt="Icon"
                style={{
                  width: "32px",
                  height: "32px",
                  marginRight: "8px",
                }}
              />
              Veuillez activer WinRAR.
            </p>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p style={{ color: "black" }}>
            Veuillez noter que WinRAR n'est pas un logiciel libre. Après 4
            secondes d'essai, vous devrez acheter une licence pour continuer à
            l'utiliser.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></div>
          <button
            style={{ color: "black", marginRight: "10px" }}
            onClick={() => {
              setShowPopup(!showPopup);
            }}
          >
            Prends mon argent
          </button>
          <button
            style={{ color: "black" }}
            onClick={() => {
              setShowPopup(!showPopup);
            }}
          >
            Je suis trop pauvre pour acheter ça
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default WinrarPopUp;
