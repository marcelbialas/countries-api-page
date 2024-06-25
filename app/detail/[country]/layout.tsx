import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Country } from "./page";

export async function generateStaticParams() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name"
  );
  const countries: Country[] = await response.json();

  return countries.map((country) => ({
    country: country.name.common,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-10 md:px-20">
      <div className="pb-6">
        <Link href="/">
          <Button className="flex items-center gap-3 px-6">
            <ArrowLeft size={16} />
            Back
          </Button>
        </Link>
      </div>
      {children}
    </main>
  );
}
