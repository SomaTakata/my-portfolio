"use client";
import { motion } from "framer-motion";

export default function page() {
  return (
    <motion.div
      className="flex flex-col gap-10 overflow-x-hidden bg-gradient-to-br
    from-violet-800 via-pink-700 to-orange-700  h-screen"
    >
      <motion.section
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="bg-gray-200/30 backdrop-blur-lg
    border border-gray-200/30 shadow-lg aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </motion.div>
  );
}
