"use client"

import { useState } from "react";

export default function NoiseMeter(){
    const [db, setDb] = useState(0);

    const percent = (db / 110) * 100;

    function setTraffic(){
        setDb(70);
    }

    function setSpeaker(){
        setDb(85);
    }

    function setPlane(){
        setDb(100);
    }

    function setConstruction(){
        setDb(110);
    }

    let face = "/images/Happy.svg";

    if (db >= 110){
        face = "/images/Aggravated.svg";
    }
    else if (db>= 100){
        face = "/images/Frustrated.svg";
    }
    else if (db >= 85){
        face = "/images/Unhappy.svg";
    }
    else if (db >= 70){
        face = "/images/Neutral.svg";
    }

    return(
        <div>
            <div 
                className="meterContainer"
                style={{
                    width: "60px",
                    height: "250px",
                    border: "4px solid black",
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div 
                    className="meterFill"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: `${percent}%`,
                        background: "linear-gradient(to top, #4CAF50 0%, #FFD54F 50%, #F44336 100%)",
                        transition: "height 0.5s ease"
                    }}
                />
            </div>

            <img
                src={face}
                alt="noise level face"
                style={{
                    width: "60px",
                    marginTop: "10px"
                }}
            />

            <p>{db} dB</p>

            <button onClick={setTraffic}>Traffic</button>
            <button onClick={setSpeaker}>Speaker</button>
            <button onClick={setPlane}>Plane</button>
            <button onClick={setConstruction}>Construction</button>
        </div>
    )
}