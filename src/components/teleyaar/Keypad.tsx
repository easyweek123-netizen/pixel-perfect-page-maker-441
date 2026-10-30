import { useState } from "react";
import { cn } from "@/lib/utils";
const KEYS: [string, string][] = [["1",""],["2","ABC"],["3","DEF"],["4","GHI"],["5","JKL"],["6","MNO"],["7","PQRS"],["8","TUV"],["9","WXYZ"],["*",""],["0","+"],["#",""]];
const NAMES: Record<string, string> = { "*": "Star", "#": "Hash, hang up" };
export function Keypad({ onKey, tooltips, disabled }: { onKey: (key: string) => void; tooltips: Record<string, string>; disabled?: boolean }) {
  const [flash, setFlash] = useState<{ k: string; n: number } | null>(null);
  return (
    <div className="mt-auto grid grid-cols-3 gap-3">
      {KEYS.map(([k, letters]) => {
        const tip = tooltips[k];
        return (
          <button key={k} type="button" disabled={disabled}
            aria-label={`${NAMES[k] ?? `Key ${k}`}${tip ? ` – ${tip}` : ""}`}
            onClick={() => { setFlash((f) => ({ k, n: (f?.n ?? 0) + 1 })); onKey(k); }}
            className={cn(
              "group relative flex min-h-16 flex-col items-center justify-center rounded-2xl shadow-key transition active:translate-y-1 disabled:opacity-50 sm:min-h-14",
              k === "#" ? "bg-hangup text-hangup-foreground" : k === "*" ? "bg-key-muted text-muted-foreground" : "bg-key",
            )}>
            <span key={flash?.k === k ? flash.n : 0} className={cn("flex flex-col items-center", flash?.k === k && "animate-key-flash")}>
              <span className="text-3xl font-bold leading-none">{k}</span>
              {letters && <span className="mt-0.5 text-[10px] font-semibold tracking-widest opacity-70">{letters}</span>}
            </span>
            {tip && (
              <span role="tooltip" className="pointer-events-none absolute -top-8 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background [@media(hover:hover)_and_(pointer:fine)]:group-hover:block">
                {tip}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
