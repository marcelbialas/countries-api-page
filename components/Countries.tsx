"use client";

import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";

interface Country {
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
}

interface Props {
  searchTerm: string;
}

export default function Countries(props: Props) {
  const [apiData, setApiData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * #TODO: Add Error handling for API call
   */

  async function getData(): Promise<void> {
    try {
      const data: Country[] = await fetch(
        "https://restcountries.com/v3.1/independent?fields=name,population,region,capital,flags"
      ).then((res) => res.json());

      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const filterCountries = (
    data: Country[],
    searchTerm: string,
    regionSearch?: string
  ): Country[] => {
    let filteredData = data;

    if (regionSearch) {
      filteredData = filteredData.filter(
        (country) => country.region === regionSearch
      );
    }

    if (searchTerm) {
      filteredData = filteredData.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  };

  return (
    <div className="mt-12 grid gap-8 md:gap-22 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        <div> loading... </div>
      ) : (
        filterCountries(apiData, props.searchTerm, "Europe")
          .sort(() => 0.5 - Math.random())
          .slice(0, 12)
          .map((country, index) => (
            <CountryItem
              key={index}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              img={country.flags.png}
              imgAlt={country.flags.alt}
            />
          ))
      )}
    </div>
  );
}
