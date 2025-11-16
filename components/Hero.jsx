"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center -mt-4">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="-mt-12" // slightly more refined
      >
        <Image
          src="/emblem.svg"
          alt="Emblem"
          width={235}     // +25 px
          height={235}
        />
      </motion.div>

      {/* THE OFFICE OF */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 1.4, ease: "easeOut" }}
        className="mt-14 text-center text-[#E8E1D5]/70 tracking-[0.26em] text-[1.02rem] font-light"
      >
        THE OFFICE OF
      </motion.h1>

      {/* Full name */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 1.4, ease: "easeOut" }}
        className="mt-3 text-center text-[#E8E1D5]/95 tracking-[0.06em] text-[1.33rem] font-light"
      >
        GREGORIUS KEVIN WICAKSONO DE WILD
      </motion.h2>

    </section>
  );
}
