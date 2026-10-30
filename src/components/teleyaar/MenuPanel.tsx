import { cn } from "@/lib/utils";
type Status = "idle" | "loading" | "playing" | "busy";
function Bars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex h-4 items-end gap-0.5", className)} aria-hidden>
      {[0, 150, 300, 450].map((d) => (
        <span key={d} className="animate-eq h-full w-1 rounded-sm bg-current" style={{ animationDelay: `${d}ms` }} />
      ))}
    </span>
  );
}
export function MenuPanel({ title, options, body, status, statusText }: {
  title: string; options: { key: string; label: string }[]; body?: string; status: Status; statusText?: string;
}) {
  return (
    <section aria-live="polite"
      className={cn("min-w-0 rounded-xl border-2 border-shell-edge bg-panel p-3 font-mono text-sm",
        status === "busy" && "border-hangup bg-busy")}>
      <h2 className="flex items-center gap-2 font-semibold">
        {title}{status === "playing" && <Bars className="text-primary" />}
      </h2>
      {(status === "loading" || status === "busy") && statusText && (
        <p className={cn("mt-1 flex items-center gap-2", status === "busy" ? "text-hangup font-semibold" : "text-muted-foreground")}>
          {status === "loading" && <Bars className="text-primary" />}{statusText}
        </p>
      )}
      <ul className="mt-2 space-y-0.5">
        {options.map((o) => <li key={o.key}>{o.key} · {o.label}</li>)}
      </ul>
      {body && <p className="mt-2 max-h-32 overflow-y-auto whitespace-pre-line break-words text-muted-foreground">{body}</p>}
    </section>
  );
}
