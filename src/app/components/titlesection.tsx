'use client';

import Lottie from "lottie-react";
import animationData from "../../../public/animations/map.json";

export default function TitleSection() {
  return (
    <section className="sm:flex items-center min-h-screen">

      <div className="">
        <Lottie animationData={animationData} className="w-auto" />
      </div>
      <div className="main-message">
        <h1 className="my-3">Move
          <span className="bg-[--secondary-color] p-2 rounded-md">anything</span>
        </h1>
        <h1 className="">easy and affordable</h1>
        <h2>Reliable. Same day. Not breaking your bank</h2>
      </div>
    </section>
  );
}
// style={{position: 'absolute', top:'300px'}}
