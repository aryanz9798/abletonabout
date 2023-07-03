
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import List from "data/List.json"
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" ml-[43rem] mt-[2rem] relative flex flex-col items-center w-[10rem] h-[10rem]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="  bg-gray-400 p-4 w-full flex items-center justify-between font-bold text-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        {" "}
        Select Country and Language
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className=" bg-gray-500 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full text-center">
            {List.map((item, i) => (
                <div className=" flex w-full justify-between cursor-pointer">
                    <h3 >{item.loc}</h3>
                    <h3>{item.lang}</h3>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
