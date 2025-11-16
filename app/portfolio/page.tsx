"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className="min-h-screen px-8 md:px-20 py-24">

        {/* Page title */}
        <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#E8E1D5] text-3xl tracking-[0.12em] font-light mb-12 text-center cursor-pointer"
        >
        <a href="/" className="hover:text-[#E8E1D5]/70 transition-colors">
            PORTFOLIO
        </a>
        </motion.h1>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        <ProjectCard
          title="Private Banking Dashboard (Power BI)"
          description="A strategic reporting dashboard built for wealth management insights using Power BI, optimized DAX, and automated refresh pipelines."
          image="/portfolio/powerbi-dashboard.png"
          link="https://your-link.com"
        />

        <ProjectCard
          title="Excel Forecast Model"
          description="A financial projection model that automates revenue forecasting, scenario analysis, and KPI monitoring using advanced Excel logic."
          image="/portfolio/excel.png"
          link="https://your-link.com"
        />

      </div>

    </section>
  );
}
