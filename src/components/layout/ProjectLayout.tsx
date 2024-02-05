import { motion } from "framer-motion";

export default function ProjectLayout() {
  return (
    <>
      <div className="text-white text-center mt-5 h-[40vh]">
        <motion.h1 whileInView={{ y:0 }} animate={{ y:100 }} className="text-7xl">
          <motion.span initial={{ x: -100 }} animate={{ x:0 }} className="text-9xl">D</motion.span>on't have{" "}
          <motion.span className="text-9xl">p</motion.span>roject
        </motion.h1>
      </div>
    </>
  );
}
