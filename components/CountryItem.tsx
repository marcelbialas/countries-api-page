import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  population: number;
  region: string;
  capital: string[];
  img: string;
  imgAlt: string;
}

const CountryItem = ({
  name,
  population,
  region,
  capital,
  img,
  imgAlt,
}: Props) => {
  return (
    <div className="w-full bg-surface pb-4">
      <Image
        src={img}
        alt={imgAlt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold py-4">{name}</h2>
        <p>
          <strong className="pr-2">Population:</strong>
          {population}
        </p>
        <p>
          <strong className="pr-2">Region:</strong> {region}
        </p>
        <p>
          <strong className="pr-2">Capital:</strong>
          {capital.map((cap: string) => cap)}
        </p>
      </div>
    </div>
  );
};

export default CountryItem;
