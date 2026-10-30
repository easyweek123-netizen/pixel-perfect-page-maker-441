import { useState } from "react";
import { Banner, Display, Footer, Keypad, MenuPanel, PhoneShell, SoundButton } from "@/components/teleyaar";
const TOOLTIPS: Record<string, string> = { "1": "English", "2": "Deutsch", "*": "Back", "#": "Hang up", "0": "Repeat" };
export default function Index() {
  const [digits, setDigits] = useState<string[]>([]);
  const [sound, setSound] = useState(true);
  return (
    <PhoneShell>
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">TeleYaar</h1>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Your phone buddy</p>
      </header>
      <Banner text="TeleYaar is your phone buddy. Turn on sound and dial a number." />
      <SoundButton visible={sound} onClick={() => setSound(false)} />
      <Display value={digits.join(" ")} />
      <MenuPanel title="Choose language" status="idle" options={[{ key: "1", label: "English" }, { key: "2", label: "Deutsch" }]} />
      <Keypad tooltips={TOOLTIPS} onKey={(k) => setDigits((d) => (k === "#" ? [] : [...d, k]))} />
      <Footer />
    </PhoneShell>
  );
}
