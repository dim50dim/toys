import Image from "next/image";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";
import Instagram from "./components/Instagram";
export default function Home() {
  return (
     <>
       <Hero heading='Knitting Toys' message="I passionate to do peculiar toys alive"/> 
       <Slider slides={SliderData}/>
       <Instagram/>
     </>
  );
}
