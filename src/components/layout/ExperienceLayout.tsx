import React from "react";

export default function ExperienceLayout() {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className=""></div>
          <div className="blur-[106px] h-[400px] w-[600px] bg-gradient-to-r from-purple-500 to-black"></div>
        </div>
      </div>
      <div className="text-white h-[40vh]">
        {/* title section */}
        <div className="mx-[200px]">
          <h1 className="text-5xl">Experience</h1>
          <div className="h-1 w-20 bg-white rounded"></div>
        </div>

        {/* logos section */}
        <div className="flex justify-evenly items-center mt-[60px]">
          <div>
            <h1 className="text-3xl">PT Ryana Asta Jaya</h1>
            <p>Back End Developer</p>
          </div>
          <div>
            <h1 className="text-3xl">CV. Sinergi Karya Nusantara</h1>
            <p>Full-Stack Developer</p>
          </div>
          <div>
            <h1 className="text-3xl">Free Lancer</h1>
            <p>Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
