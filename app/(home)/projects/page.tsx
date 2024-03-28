"use client";
import { motion } from "framer-motion";

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

export default function page() {
  return (
    <motion.div
      className="flex flex-col gap-10 overflow-x-hidden bg-gradient-to-br
    from-violet-800 via-pink-700 to-orange-700  h-screen"
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
            className="w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20  bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20  bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          ></motion.div>
        </motion.div>
        {/* Shape Shifting */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/4 h-1/4 shadow-md bg-white"
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
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </motion.div>
  );
}
