import DialogueBox from "@/components/DialogueBox";
import "./page.module.css";
import TopOrderComponent from "@/components/TopOrderComponent";
export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
        <TopOrderComponent />
      </div>
    </main>
  );
}
