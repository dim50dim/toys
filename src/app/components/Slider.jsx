"use client";

import { useState } from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div>
      <div id="gallery" className="max-w-[1240px] mx-auto">
        <h1 className="text-2xl p-4 font-bold text-center">Gallery</h1>
        <div className="relative flex justify-center p-4">
          {SliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current ? "opacity-[1] duration-1000" : "opacity-0"
                }
              >
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[30px]
                         text-white/70 cursor-pointer select-none z-[2]"
                  size={30}
                />


                {index === current && (
           <Image
                    style={{ objectFit: "cover" }}
                    src={slide.image}
                    alt="/slide"
                    width="1440"
                    height="600"
                  />
                )}
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[30px]
                         text-white/70 cursor-pointer select-none z-[2]"
                  size={30}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
