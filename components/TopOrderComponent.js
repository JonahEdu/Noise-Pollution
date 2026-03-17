"use client";
import Car from "./Car";
import BadgeBar from "./BadgeBar";
import { useState } from "react";
const TopOrderComponent = () => {
  const [badgeSpeaker, setBadgeSpeaker] = useState(false);
  const [badgeCar, setBadgeCar] = useState(false);
  const [badgeConstruction, setBadgeConstruction] = useState(false);
  const [badgeAirplane, setBadgeAirplane] = useState(false);

  return (
    <div>
      <div
        onClick={() => setBadgeCar(true)}
        className="road"
        style={{
          position: "absolute",
          top: "35rem",
          left: "570px",
          cursor: "pointer",
        }}
      >
        <Car />
      </div>

      <div
        onClick={() => setBadgeConstruction(true)}
        className="construction-sector"
        style={{
          position: "absolute",
          top: "122px",
          left: "40px",
          cursor: "pointer",
        }}
      >
        <img
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
        }}
      >
        <img
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
        }}
      >
        <img
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
      />
    </div>
  );
};

export default TopOrderComponent;
