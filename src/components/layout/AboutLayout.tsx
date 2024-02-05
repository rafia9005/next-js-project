import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutLayout() {
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
      <div className="text-white flex justify-between mx-[400px] items-center h-[60vh]">
        <div>
          <motion.h1
            transition={{ duration: 0.5 }}
            whileInView={{ x: 0 }}
            animate={{ x: -100 }}
            className="text-6xl"
          >
            Ahmad Rafi
          </motion.h1>
          <motion.p
            transition={{ duration: 0.8 }}
            whileInView={{ x: 0 }}
            animate={{ x: -100 }}
            className="text-start"
          >
            Full-Stack Developer
          </motion.p>
          <motion.div
            transition={{ duration: 1.1 }}
            whileInView={{ x: 0 }}
            animate={{ x: -100 }}
            className="w-1/2 mt-5"
          >
            <p>
              Hi 👋 I'm Ahmad Rafi. I am a Full-Stack Developer and a Free
              Lancer, I come from the city of Malang and study at SMKN 6 Malang
              majoring in Application Network Information Systems.
            </p>
          </motion.div>
        </div>
        <motion.div
          transition={{ duration: 0.5 }}
          whileInView={{ scale: 2.2 }}
          animate={{ scale: 0 }}
        >
          <Image src="./profile.jpg" alt="" className="w-[300px] rounded-md" />
        </motion.div>
      </div>
    </>
  );
}
