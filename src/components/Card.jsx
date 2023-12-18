import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion";

const Card = ({ data, refrence }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={refrence}
        whileDrag={{ scale: 1.02 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30, power: 0 }}
        className="flex-shrink-0 relative overflow-hidden w-32 h-40 md:w-60 md:h-72 rounded-2xl md:rounded-[45px] bg-zinc-900/90 px-3 md:px-5 py-5 md:py-10 text-white p-2 md:p-5"
      >
        <LuFileSpreadsheet />
        <p className="text-sm leading-tight mt-1 md:mt-5 font-semibold">
          {data.desc}
        </p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between py-1 md:py-3 px-4 md:px-8 mb-2 md:mb-3">
            <h5 className="text-sm">{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <IoCloudDownloadOutline size=".9em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-2 md:py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex justify-center items-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
