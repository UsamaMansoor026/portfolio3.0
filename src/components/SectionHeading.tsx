import React from "react";

const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <h2 className="name text-center font-bold text-4xl md:text-5xl h-[70px]">
      {heading}
    </h2>
  );
};

export default SectionHeading;
