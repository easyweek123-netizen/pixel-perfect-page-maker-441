import type { ReactNode } from "react";
export function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] w-full items-stretch justify-center overflow-x-hidden bg-plum sm:items-center sm:p-6">
      <div className="flex min-h-[100dvh] w-full min-w-0 flex-col gap-3 bg-shell px-4 pb-3 pt-4 text-foreground sm:min-h-0 sm:max-w-[420px] sm:rounded-[2.5rem] sm:border-4 sm:border-shell-edge sm:px-6 sm:py-6 sm:shadow-phone">
        {children}
      </div>
    </div>
  );
}
