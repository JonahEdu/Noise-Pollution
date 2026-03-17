import DialogueBox from "@/components/DialogueBox";
import "./page.module.css";
import TopOrderComponent from "@/components/TopOrderComponent";
export default function Home(db) {
  const percent = Math.min((db / 110) * 100, 100);

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 1. The Image Layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
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
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
        <TopOrderComponent />
      </div>
    </main>
  );
}
