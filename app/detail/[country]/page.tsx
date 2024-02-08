"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Country {
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
      console.log(data);
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
          <div key={index} className="flex flex-col md:flex-row gap-14">
            <div className="w-1/3">
              <Image
                src={country.flags.png}
                alt={country.flags.alt}
                width={0}
                height={0}
                sizes="100%"
                className="w-full h-[auto] object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{country.name.common}</h1>
              <div>
                <div>
                  <span className="font-bold">Native Name: </span>
                  {Object.keys(country.name.nativeName).map((el, index) => (
                    <span key={index}>
                      {country.name.nativeName[el].official}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="font-bold">
                    Population: {country.population.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Region: </span>
                  {country.region}
                </div>
                <div>
                  <span className="font-bold">Sub Region: </span>
                  {country.subregion}
                </div>
                <div>
                  <span className="font-bold">Capital: </span>
                  {country.capital[0]}
                </div>
                <div>
                  <span className="font-bold">Top Level Domain: </span>
                  {country.tld}
                </div>
                <div>
                  <span className="font-bold">Currencies: </span>
                  {Object.keys(country.currencies).map((cur, index) => (
                    <span key={index}>{country.currencies[cur].name}</span>
                  ))}
                </div>
                <div>
                  <span className="font-bold">Languages: </span>
                  {Object.keys(country.languages).map((lan, index) => (
                    <span key={index}>
                      {country.languages[lan]}
                      {Object.keys(country.languages).length - 1 !== index
                        ? ", "
                        : " "}
                    </span>
                  ))}
                </div>
                <div>
                  {country.borders.map((borderCountry, index) => (
                    <span key={index}>
                      {borderCountry}
                      {country.borders.length - 1 !== index && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
