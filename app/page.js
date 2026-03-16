import Image from "next/image";
import styles from "./page.module.css";
import CityScene from "@/components/CityScene";
import BadgeBar from "@/components/BadgeBar";
import DialogueBox from "@/components/DialogueBox";
import NoiseMeter from "@/components/NoiseMeter";

export default function Home() {
  return (
    <main className={styles.container}>
      <CityScene />
      <BadgeBar />
      <DialogueBox />
      <NoiseMeter />
    </main>
  );
}