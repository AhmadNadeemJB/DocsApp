import React from "react";

const Background = () => {
  return (
    <>
      <div className="h-screen w-full fixed z-[2]">
        <div className="select-none w-full absolute top-[5%] py-10 flex justify-center text-zinc-600 text-xl font-semibold">
          Docs
        </div>
        <h1 className="select-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[12vw] leading-none tracking-tighter">
          Docs
        </h1>
      </div>
    </>
  );
};

export default Background;
