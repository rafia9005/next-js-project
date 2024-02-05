import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderComponent = (props: any) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="w-[70px] h-[70px] rounded-full"
            >
              <img src="./profile.jpg" alt="" />
            </motion.div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </main>
  );
};

export default LoaderComponent;
