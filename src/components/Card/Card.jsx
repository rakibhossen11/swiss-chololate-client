import React from "react";
import { FaPlus,FaEye } from 'react-icons/fa';

const Card = ({ title, details, img }) => {
  return (
    <div className="shadow-2xl rounded-2xl p-5 transform transition duration-500 hover:scale-105">
        <div>
            
        </div>
      <div className="relative overflow-hidden">
        <img src={img} alt="" />
        <div className="absolute h-full w-full bg-black/20 flex items-center justify-center gap-2 -bottom-10 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
        <div className="bg-orange-400 p-2"><FaPlus className="" /></div>
        <div className="bg-red-400 p-2"><FaEye className="" /></div>
        </div>
      </div>
      <div>
        <h2 className="font-signika text-xl mt-2 text-center ">{title} 
        
        </h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Card;
