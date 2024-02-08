"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import CountryDetail from "@/components/CountryDetail";

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string;
  population: number;
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  region: string;
  subregion: string;
  borders: string[];
}

export default function Page({ params }: { params: { country: string } }) {
  const [apiData, setApiData] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getCountryData(): Promise<void> {
    try {
      const data: Country[] = await fetch(
        `https://restcountries.com/v3.1/name/${params.country}?fullText=true`
      ).then((res) => res.json());

      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-10 md:px-20">
      <div className="pb-12">
        <Link href="/">
          <Button className="flex items-center gap-3 px-6">
            <ArrowLeft size={16} />
            Back
          </Button>
        </Link>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        apiData.map((country, index) => (
          <CountryDetail key={index} country={country} />
        ))
      )}
    </main>
  );
}
