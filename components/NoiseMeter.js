"use client";

import { useState } from "react";

export default function NoiseMeter({ db }) {
  const percent = Math.min((db / 110) * 100, 100);

  let face = "/images/Happy.svg";

  if (db >= 110) {
    face = "/images/Aggravated.svg";
  } else if (db >= 100) {
    face = "/images/Frustrated.svg";
  } else if (db >= 85) {
    face = "/images/Unhappy.svg";
  } else if (db >= 70) {
    face = "/images/Neutral.svg";
  }

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        right: "-1000px",
        top: "-576px",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        className="meterContainer"
        style={{
          width: "60px",
          height: "250px",
          border: "4px solid black",
          borderRadius: "0 0 50px 50px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <div
          className="meterFill"
          style={{
            width: "100%",
            height: `${percent}%`,
            background:
              "linear-gradient(to top, #4CAF50 0%, #FFD54F 50%, #F44336 100%)",
            transition: "height 0.5s ease",
            backgroundAttachment: "fixed",
          }}
        />
        <img
          src={face}
          alt="noise level face"
          style={{
            position: "absolute",
            bottom: "-4%",
            height: "60px",
            left: 0,
            right: 0,
            width: "60px",
          }}
        />
      </div>

      <p
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "30px",
        }}
      >
        {db} dB
      </p>
    </div>
  );
}
