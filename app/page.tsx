'use client';

import React from "react";
import { HeroUIProvider } from "@heroui/react";
import HealthDeclaration from "@/app/ui/health_declaration";

export default function HomePage() {
  return (
    <HeroUIProvider>
      <main className="p-10">
        <HealthDeclaration />
      </main>
    </HeroUIProvider>
  );
}