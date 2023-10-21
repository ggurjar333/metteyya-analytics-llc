import React from "react";

const SubHero = () => {
  return (
    <div className="flex flex-row text-white space-x-5 pl-48 py-12 bg-gradient-to-br from-purple-900 to-indigo-900 ">
      <img className="h-56 w-52 block" src="./2A.svg" alt="" />
      <div className="w-3/4 mt-14 ">
        <h1 className="text-3xl">
          The Perfect Fusion: Human Expertise and AI Precision
        </h1>
        <p className="my-6 w-5/6">
          Harnessing the power of AI tools, we combine human experience with
          cutting-edge technology, delivering unrivaled precision, efficiency,
          and cost-effectiveness. Accelerate your growth while saving time and
          resources.
        </p>
      </div>
    </div>
  );
};

export default SubHero;
