"use client";

import React, { useState } from "react";

interface Props {
  onSearchTermChange: (term: string) => void;
}

const PageToolbar = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    props.onSearchTermChange(e.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-6 md:flex-row md:place-content-between ">
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search for a Country..."
          className="py-2 px-4 w-full md:w-[35vw] shadow-sm rounded placeholder:text-sm bg-input "
          onChange={(e) => handleInputChange(e)}
          value={searchTerm}
        />
      </div>
      <div>
        <select className="appearance-none bg-input py-3 px-6 text-sm rounded">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default PageToolbar;
