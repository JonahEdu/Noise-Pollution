"use client";
import BadgeBar from "./BadgeBar";
import { useState } from "react";

const TopOrderComponent = () => {
  const [badgeSpeaker, setBadgeSpeaker] = useState(false);
  const [badgeCar, setBadgeCar] = useState(false);
  const [badgeConstruction, setBadgeConstruction] = useState(false);
  const [badgeAirplane, setBadgeAirplane] = useState(false);
  const [db, setDb] = useState(0);

  return (
    <div>
      <div
        onClick={() => {
          setBadgeCar(true);
        }}
        className="road"
        style={{
          position: "absolute",
          top: "35rem",
          left: "570px",
          cursor: "pointer",
        }}
      >
        <img
          className={!badgeCar ? "heartbeat-icon" : ""}
          style={{
            height: "100px",
            width: "200px",
          }}
          src="/images/Car.svg"
          alt=""
        />{" "}
      </div>

      <div
        onClick={() => setBadgeConstruction(true)}
        style={{
          position: "absolute",
          top: "127px",
          left: "40px",
          cursor: "pointer",
        }}
      >
        <img
          className={!badgeConstruction ? "heartbeat-icon" : ""}
          src="/images/Construction.svg"
          alt=""
          style={{
            height: "500px",
            width: "410px",
          }}
        />
      </div>

      <div
        onClick={() => setBadgeSpeaker(true)}
        className="speaker"
        style={{
          position: "absolute",
          top: "490px",
          left: "1050px",
          cursor: "pointer",
        }}
      >
        <img
          className={!badgeSpeaker ? "heartbeat-icon" : ""}
          src="/images/Speaker.svg"
          alt="Speaker Vector"
          style={{
            height: "50px",
          }}
        />
      </div>
      <div
        onClick={() => setBadgeAirplane(true)}
        className="sky"
        style={{
          position: "absolute",
          left: "30%",
          top: "2%",
          cursor: "pointer",
        }}
      >
        <img
          className={!badgeAirplane ? "heartbeat-icon" : ""}
          src="/images/Airplane.svg"
          alt=""
          style={{
            height: "80px",
            width: "400px",
          }}
        />
      </div>

      <BadgeBar
        car={badgeCar}
        construction={badgeConstruction}
        speaker={badgeSpeaker}
        airplane={badgeAirplane}
        db={db}
      />
    </div>
  );
};

export default TopOrderComponent;
