"use client";

import React, { useState } from "react";

import Countries from "@/components/Countries";
import PageToolbar from "@/components/page-toolbar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-10 md:px-20">
      <PageToolbar onSearchTermChange={handleSearchTermChange} />
      <Countries searchTerm={searchTerm} />
    </main>
  );
}
