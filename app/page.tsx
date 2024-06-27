"use client";

import React, { useState, useEffect } from "react";

import Countries from "@/components/Countries";
import PageToolbar from "@/components/page-toolbar";
import Pagination from "@/components/ui/pagination";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [page, setPage] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const savedPage = JSON.parse(localStorage.getItem("currentPage") || "1");
      return savedPage;
    }
  });
  const [pageSize, setPageSize] = useState<number>(33);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleSearchTermChange = (term: string): void => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleRegionChange = (region: string): void => {
    setRegion(region);
    setPage(1);
  };

  const handlePageChange = (page: number): void => {
    setPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-10 md:px-20">
      <PageToolbar
        onSearchTermChange={handleSearchTermChange}
        onRegionChange={handleRegionChange}
      />
      <Countries
        searchTerm={searchTerm}
        region={region}
        page={page}
        pageSize={pageSize}
        onTotalCountChange={setTotalCount}
      />
      <Pagination
        currentPage={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
