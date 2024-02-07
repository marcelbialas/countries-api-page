import React from "react";

type Props = {
  name: string;
  population: number;
  region: string;
  capital: string[];
  img: string;
};

const CountryItem = (props: Props) => {
  return (
    <div className="w-full bg-surface pb-4">
      <img src={props.img} className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold py-4">{props.name}</h2>
        <p>
          <strong className="pr-2">Population:</strong>
          {props.population}
        </p>
        <p>
          <strong className="pr-2">Region:</strong> {props.region}
        </p>
        <p>
          <strong className="pr-2">Capital:</strong>
          {props.capital.map((capital) => capital)}
        </p>
      </div>
    </div>
  );
};

export default CountryItem;
