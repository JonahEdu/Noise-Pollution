export default function BadgeBar({ car, construction, speaker, airplane }) {
  return (
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
        <img src="/images/Traffic-Badge.svg" alt="" className="badge" />
      ) : (
        <img
          src="/images/Empty-Badge.svg"
          alt="Empty-Badge"
          className="badge"
        />
      )}

      {speaker ? (
        <img src="/images/Speaker-Badge.svg" alt="" className="badge" />
      ) : (
        <img
          src="/images/Empty-Badge.svg"
          alt="Empty-Badge"
          className="badge"
        />
      )}

      {construction ? (
        <img
          src="/images/Construction-Badge.svg"
          alt="Construction Badge"
          className="badge"
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
          src="/images/Airplane-Badge.svg"
          alt="Construction Badge"
          className="badge"
        />
      ) : (
        <img
          src="/images/Empty-Badge.svg"
          alt="Empty-Badge"
          className="badge"
        />
      )}
    </div>
  );
}
