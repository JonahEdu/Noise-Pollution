import NoiseMeter from "./NoiseMeter";
import { useState } from "react";
import DialogueBox from "./DialogueBox";

export default function BadgeBar({ car, construction, speaker, airplane }) {
  const [db, setDb] = useState(0);

  return (
    <div>
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
              console.log(db);
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
            onClick={() => setDb(85)}
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
            onClick={() => setDb(100)}
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
            onClick={() => setDb(110)}
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
