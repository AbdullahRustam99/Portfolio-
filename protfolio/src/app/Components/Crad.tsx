import React from "react";

const Crad = ( {text,dir} :any) => {
  return (
    <div className="mx-40 mt-3 mb-20 p-20 flex justify-center flex-col items-center gap-10 bg-gradient-to-tr text-white from-blue-600 to-purple-700 max-md:p-10 max-sm:mx-4">
      <h2 className="text-[30px] font-bold  max-md:text-[22px]">{text}</h2>
      <p className="text-[30px]  max-md:text-[22px]">{dir}</p>
    </div>
  );
};

export default Crad;
