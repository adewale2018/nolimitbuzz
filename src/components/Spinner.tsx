import { motion } from "motion/react";

const Spinner = () => {
  return (
    <section className="h-screen flex flex-col items-center pt-20">
      <p className="mb-2">Loading...</p>
      <motion.div
        className="w-10 h-10 border-2 border-t-4 border-t-sky-500 border-key-300 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Spinner;
