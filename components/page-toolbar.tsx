import React from "react";

type Props = {};

const PageToolbar = (props: Props) => {
  return (
    <div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Nach Land suchen..."
          className="py-2 px-4 w-[30vw] shadow-sm rounded placeholder:text-sm bg-input "
        />
      </div>
    </div>
  );
};

export default PageToolbar;
