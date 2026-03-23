import NoiseMeter from "./NoiseMeter";
import { useState } from "react";
import DialogueBox from "./DialogueBox";

export default function BadgeBar({ car, construction, speaker, airplane }) {
  const [db, setDb] = useState(0);
  const [hueRotate, setHueRotate] = useState("0");

  return (
    <div>
      <div
        className="background-img-div"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -200,
        }}
      >
        <img
          src="/images/Cityscape.svg"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            zIndex: -100,
            filter: `hue-rotate(${hueRotate})`,
          }}
        />
      </div>
      <div
        className="badgeBar"
        style={{
          borderTopRightRadius: "45px",
          backgroundColor: "#43476C",
          width: "300px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          paddingLeft: "30px",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        {car ? (
          <img
            onClick={() => {
              setDb(70);
              setHueRotate("70deg");
            }}
            src="/images/Traffic-Badge.svg"
            alt=""
            className={db === 70 ? "badge border-active" : "badge"}
          />
        ) : (
          <img
            src="/images/Empty-Badge.svg"
            alt="Empty-Badge"
            className="badge"
          />
        )}

        {speaker ? (
          <img
            onClick={() => {
              setDb(85);
              setHueRotate("100deg");
            }}
            src="/images/Speaker-Badge.svg"
            alt=""
            className={db === 85 ? "badge border-active" : "badge"}
          />
        ) : (
          <img
            src="/images/Empty-Badge.svg"
            alt="Empty-Badge"
            className="badge"
          />
        )}

        {construction ? (
          <img
            onClick={() => {
              setDb(100);
              setHueRotate("150deg");
            }}
            src="/images/Construction-Badge.svg"
            alt="Construction Badge"
            className={db === 100 ? "badge border-active" : "badge"}
          />
        ) : (
          <img
            src="/images/Empty-Badge.svg"
            alt="Empty-Badge"
            className="badge"
          />
        )}

        {airplane ? (
          <img
            onClick={() => {
              setDb(110);
              setHueRotate("200deg");
            }}
            src="/images/Airplane-Badge.svg"
            alt="Construction Badge"
            className={db === 110 ? "badge border-active" : "badge"}
          />
        ) : (
          <img
            src="/images/Empty-Badge.svg"
            alt="Empty-Badge"
            className="badge"
          />
        )}
        <NoiseMeter db={db} />
        <div
          className="container-dialogue"
          style={{
            position: "absolute",
            bottom: "0",
            right: "-215%",
          }}
        >
          <DialogueBox db={db} />
        </div>
      </div>
    </div>
  );
}
