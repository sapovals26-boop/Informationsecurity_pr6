"use client";

import { HeroUIProvider } from "@heroui/react";
import { Providers } from "./provider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <Providers>{children}</Providers>
    </HeroUIProvider>
  );
}
