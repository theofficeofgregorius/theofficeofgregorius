"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="block rounded-xl border border-[#E8E1D5]/15 p-6 hover:border-[#E8E1D5]/40 transition-colors"
    >
      <div className="w-full overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="rounded-lg object-cover opacity-90"
        />
      </div>

      <h3 className="text-[#E8E1D5] text-xl tracking-wide mb-2">
        {title}
      </h3>

      <p className="text-[#E8E1D5]/70 text-[0.95rem] leading-relaxed">
        {description}
      </p>
    </motion.a>
  );
}
