import Image from "next/image";
import "./page.module.css";
import CityScene from "@/components/CityScene";
import BadgeBar from "@/components/BadgeBar";
import DialogueBox from "@/components/DialogueBox";
import NoiseMeter from "@/components/NoiseMeter";


export default function Home() {
  return (
    <main>
      <CityScene />
      <BadgeBar />
      <DialogueBox />
      <NoiseMeter />
    </main>
  );
}