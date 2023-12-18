import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Fuck you",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: " now", tagColor: "blue" },
    },
    {
      desc: "Fuck you",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download now", tagColor: "Green" },
    },
    {
      desc: "Fuck you",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "red" },
    },
    {
      desc: "Fuck you too",
      filesize: ".18mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
    },
  ];
  return (
    <div ref={ref} className="z-[1] w-full h-full">
      <div className="top-0 left-0 fixed z-[3] flex gap-[0.7rem] md:gap-10 flex-wrap p-3 md:p-5">
        {data.map((item, index) => (
          <Card data={item} refrence={ref} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
