import React from "react";
import { ModeToggle } from "./theme-toggle";

type Props = {};

const PageHeader = (props: Props) => {
  return (
    <div className="h-16 bg-surface drop-shadow-sm">
      <div className="flex w-full h-full  px-4 md:px-20 items-center place-content-between">
        <div className="text-2xl font-bold">Where in the world?</div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default PageHeader;
