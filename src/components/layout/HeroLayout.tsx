import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HeroLayout() {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className=""></div>
          <div className="blur-[106px] h-[200px] w-[900px] bg-gradient-to-r from-purple-900 to-black"></div>
        </div>
      </div>
      <div className="flex justify-between items-center h-screen text-white">
        <div className="text-start mx-[100px]">
          <motion.h1
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[180px] font-bold"
          >
            Ahmad Rafi.
          </motion.h1>
          <div>
            <motion.p
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-1/2"
            >
              Hi 👋 I'm Ahmad Rafi. I am a Full-Stack Developer and a Free
              Lancer, I come from the city of Malang and study at SMKN 6 Malang
              majoring in Application Network Information Systems.
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-[20px] mt-3"
          >
            <Link
              href=""
              className="border-white border text-white hover:shadow-lg px-5 py-2 rounded-md "
            >
              Github
            </Link>
            <Link
              href=""
              className="border-white border text-white hover:shadow-lg px-5 py-2 rounded-md "
            >
              LinkedIn
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
