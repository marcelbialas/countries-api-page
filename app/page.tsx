"use client";

import React, { useState } from "react";

import Countries from "@/components/Countries";
import PageToolbar from "@/components/page-toolbar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleRegionChange = (region: string): void => {
    setRegion(region);
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-10 md:px-20">
      <PageToolbar
        onSearchTermChange={handleSearchTermChange}
        onRegionChange={handleRegionChange}
      />
      <Countries searchTerm={searchTerm} region={region} />
    </main>
  );
}
