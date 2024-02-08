import React from "react";
import Image from "next/image";
import { Country } from "@/app/detail/[country]/page";

interface Props {
  country: Country;
}

export default function CountryDetail(props: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-14">
      <div className="w-1/3">
        <Image
          src={props.country.flags.png}
          alt={props.country.flags.alt}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-[auto] object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{props.country.name.common}</h1>
        <div>
          <div>
            <span className="font-bold">Native Name: </span>
            {Object.keys(props.country.name.nativeName).map((el, index) => (
              <span key={index}>
                {props.country.name.nativeName[el].official}
              </span>
            ))}
          </div>
          <div>
            <span className="font-bold">
              Population: {props.country.population.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="font-bold">Region: </span>
            {props.country.region}
          </div>
          <div>
            <span className="font-bold">Sub Region: </span>
            {props.country.subregion}
          </div>
          <div>
            <span className="font-bold">Capital: </span>
            {props.country.capital[0]}
          </div>
          <div>
            <span className="font-bold">Top Level Domain: </span>
            {props.country.tld}
          </div>
          <div>
            <span className="font-bold">Currencies: </span>
            {Object.keys(props.country.currencies).map((cur, index) => (
              <span key={index}>
                {props.country.currencies[cur].name} (
                {props.country.currencies[cur].symbol})
              </span>
            ))}
          </div>
          <div>
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
          <div>
            {props.country.borders &&
              props.country.borders.map((borderCountry, index) => (
                <span key={index}>
                  {borderCountry}
                  {props.country.borders.length - 1 !== index && ", "}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
