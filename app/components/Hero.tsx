"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-40 md:pt-32 pb-20 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600/10 blur-[90px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent"></div>

      {/* Profile */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Najim Ansari"
          width={220}
          height={220}
          priority
          className="
            rounded-full
            border-4
            border-purple-400
            shadow-[0_0_40px_#a855f7]
            hover:scale-105
            transition-all
            duration-500
          "
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative z-10
          mt-8
          text-5xl
          sm:text-6xl
          md:text-8xl
          font-extrabold
          bg-gradient-to-r
          from-white
          via-purple-300
          to-violet-500
          bg-clip-text
          text-transparent
          text-center
        "
      >
        Najim Ansari
      </motion.h1>

      {/* Animated Title */}
      <div className="relative z-10 mt-5 text-center">
        <TypeAnimation
          sequence={[
            "Data Scientist",
            2000,
            "Data Analyst",
            2000,
            "AI Enthusiast",
            2000,
            "Machine Learning Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="
            text-lg
            md:text-2xl
            text-purple-200
            font-medium
          "
        />
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="
          relative z-10
          mt-6
          max-w-3xl
          text-gray-400
          text-base
          md:text-lg
          text-center
          leading-8
        "
      >
        Transforming Data into Insights, Building Intelligent AI Systems,
        Creating Interactive Dashboards and Solving Real-World Problems using
        Data Science, Analytics and Machine Learning.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="
          relative z-10
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-5
          items-center
          justify-center
        "
      >
        <a
          href="#projects"
          className="
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-violet-600
            text-white
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_0_20px_#a855f7]
          "
        >
          View Projects
        </a>

        <a
          href="/resume/resume.pdf"
          download
          className="
            px-8
            py-4
            rounded-xl
            border
            border-purple-500
            text-white
            font-semibold
            hover:bg-purple-500/20
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Download Resume
        </a>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          relative
          mt-8
          text-purple-400
          text-sm
          z-10
        "
      >
        Scroll Down ↓
      </motion.div>
    </section>
  );
}