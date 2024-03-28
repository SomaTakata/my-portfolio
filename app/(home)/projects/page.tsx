"use client";
import { motion, useScroll } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211,77,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211,77,1)",
  },
};

export default function page() {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <motion.div
      className="flex flex-col gap-10 overflow-x-hidden bg-gradient-to-br
    from-black via-gray-800 to-orange-700  h-screen"
    >
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade Up */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-2 sm:gap-5 lg:gap-10"
        >
          <motion.div
            className="w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20  bg-orange-500 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#615ae0",
              color: "#ffffff",
            }}
          ></motion.div>
          <motion.div
            className="w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20  bg-orange-500 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#cc4a6c",
              color: "#ffffff",
            }}
          ></motion.div>
        </motion.div>
        {/* Shape Shifting */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/4 h-1/4 shadow-md bg-orange-500"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#5ae085",
              color: "#ffffff",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-orange-500 sm:w-1/2 px-4 py-1 sm:py-4 rounded-lg   text-white font-bold tracking-wide"
          >
            Button
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab "
            drag
            dragConstraints={{
              top: -125,
              right: 125,
              bottom: 125,
              left: -125,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          ></motion.div>
        </motion.div>
        {/* Scroll Progress */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="w-1/2 aspect-square bg-gray-800 rounded-xl">
            <motion.div
              className="w-full bg-orange-500 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]
            "
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
