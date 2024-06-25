"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Country } from "@/app/detail/[country]/page";
import Link from "next/link";

interface Props {
  country: Country;
  getBorders: (borderArr: string[]) => Promise<string[]>;
}

export default function CountryDetail(props: Props) {
  const [borderCountries, setBorderCountries] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const borders = await props.getBorders(props.country.borders);
      setBorderCountries(borders);
    };
    fetchData();
  }, [props.country.borders, props]);
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2 mr-6">
        <Image
          src={props.country.flags.png}
          alt={props.country.flags.alt}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="lg:px-6 w-full lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{props.country.name.common}</h1>
        <div className="flex flex-wrap">
          <div className="basis-full gap:3 md:basis-3/5 flex-shrink">
            <div className="pb-2">
              <span className="font-bold">Native Name: </span>
              {props.country.name.common}
            </div>
            <div className="pb-2">
              <span className="font-bold">Population: </span>
              {props.country.population.toLocaleString()}
            </div>
            <div className="pb-2">
              <span className="font-bold">Region: </span>
              {props.country.region}
            </div>
            <div className="pb-2">
              <span className="font-bold">Sub Region: </span>
              {props.country.subregion}
            </div>
            <div className="pb-2">
              <span className="font-bold">Capital: </span>
              {props.country.capital[0]}
            </div>
          </div>
          <div className="basis-full gap:3 md:basis-2/5 flex-shrink">
            <div className="pb-2">
              <span className="font-bold">Top Level Domain: </span>
              {props.country.tld}
            </div>
            <div className="pb-2">
              <span className="font-bold">Currencies: </span>
              {Object.keys(props.country.currencies).map((cur, index) => (
                <span key={index}>
                  {props.country.currencies[cur].name} (
                  {props.country.currencies[cur].symbol})
                </span>
              ))}
            </div>
            <div className="pb-2">
              <span className="font-bold">Languages: </span>
              {Object.keys(props.country.languages).map((lan, index) => (
                <span key={index}>
                  {props.country.languages[lan]}
                  {Object.keys(props.country.languages).length - 1 !== index
                    ? ", "
                    : " "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-10 lg:pt-20">
          <h2 className="font-bold mb-2">Border Countries: </h2>
          <div className="flex flex-row gap-3 w-full flex-wrap">
            {borderCountries.length > 0
              ? borderCountries.map((country, index) => (
                  <Link key={index} href={`/detail/${country}`}>
                    <button className="bg-primary hover:bg-yellow-500 text-yellow-900 text-sm font-bold py-2 px-4 rounded-full mr-1">
                      {country}
                    </button>
                  </Link>
                ))
              : "No Border Countries"}
          </div>
        </div>
      </div>
    </div>
  );
}
