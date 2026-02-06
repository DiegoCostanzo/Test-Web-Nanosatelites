import { NanoHeader } from "./components/NanoHeader";
import { NanoHero } from "./components/NanoHero";
import { NanoMissions } from "./components/NanoMissions";
import { NanoTechnology } from "./components/NanoTechnology";
import { NanoAbout } from "./components/NanoAbout";
import { NanoFooter } from "./components/NanoFooter";

export default function App() {
  return (
    <div className="size-full bg-slate-950">
      <NanoHeader />
      <main>
        <NanoHero />
        <NanoMissions />
        <NanoTechnology />
        <NanoAbout />
      </main>
      <NanoFooter />
    </div>
  );
}
