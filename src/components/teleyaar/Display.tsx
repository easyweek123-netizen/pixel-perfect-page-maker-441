import { useEffect, useRef } from "react";
export function Display({ value }: { value: string }) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth; }, [value]);
  return (
    <input ref={ref} readOnly value={value} aria-label="Dialed number" placeholder="_"
      className="lcd-glow block w-full min-w-0 rounded-xl border-4 border-shell-edge bg-lcd px-4 py-2 text-right font-lcd text-4xl tracking-widest text-lcd-text outline-none placeholder:text-lcd-text/40" />
  );
}
