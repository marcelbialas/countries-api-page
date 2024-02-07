"use client";

import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import { count } from "console";

type Props = {};

type Country = {
  capital: string[];
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
    official: string;
  };
  region: string;
  population: number;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
};

export default function Countries({}: Props) {
  const [apiData, setApiData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const data: Country[] = await fetch(
      "https://restcountries.com/v3.1/independent?fields=name,population,region,capital,flags"
    ).then((res) => res.json());

    setApiData(
      data.filter(
        (country) =>
          country.name.common.includes("G") && country.region === "Europe"
      )
    );
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [loading]);

  return (
    <div className="mt-12 grid gap-8 md:gap-22 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        <div> loading... </div>
      ) : (
        apiData.map((country) => (
          <CountryItem
            key={country.name.common}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            img={country.flags.png}
          />
        ))
      )}
    </div>
  );
}
