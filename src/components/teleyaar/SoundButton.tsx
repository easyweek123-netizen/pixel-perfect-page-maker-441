export function SoundButton({ visible, onClick }: { visible: boolean; onClick: () => void }) {
  if (!visible) return null;
  return (
    <button type="button" onClick={onClick}
      className="mx-auto rounded-full bg-primary px-5 py-2 text-base font-semibold text-primary-foreground shadow-key transition active:translate-y-0.5">
      🔊 Turn on sound
    </button>
  );
}
