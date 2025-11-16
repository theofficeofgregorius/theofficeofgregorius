"use client";

import CVSection from "@/components/CVSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CVPage() {
  return (
    <section className="relative min-h-screen px-8 md:px-32 py-28 select-none">

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.025]">
        <Image
          src="/emblem.svg"
          alt="Watermark"
          width={620}
          height={620}
          className="scale-110"
        />
      </div>

        {/* Profile Photo */}
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-10 relative z-20"
        >
        <Image
            src="/cv/profile.jpg"
            alt="Profile Photo"
            width={140}
            height={140}
            className="rounded-full opacity-90 border border-[#E8E1D5]/20"
        />
        </motion.div>


      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20 relative z-20"
      >
      <Link href="/" className="inline-block">
        <h1 className="text-[#E8E1D5] text-4xl tracking-[0.20em] font-light hover:opacity-80 transition-opacity cursor-pointer">
          CURRICULUM VITAE
        </h1>
      </Link>

        <div className="w-24 h-[1px] bg-[#E8E1D5]/30 mx-auto mt-4" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 max-w-[850px] mx-auto space-y-24">

        {/* ABOUT ME */}
        <CVSection
          title="ABOUT ME"
          paragraph={`I am a data-driven Business & Data Analyst with a background in finance, analytics, and strategic decision-making. I am energized by complex questions at the intersection of data, people, and strategy — and motivated by taking ownership, creating clarity, and producing insights that genuinely influence decisions and performance.

Colleagues describe me as curious, reliable, and sharp: someone who quickly understands what is happening, takes responsibility without hesitation, and consistently looks for better ways of working.

With experience in Wealth Management at ABN AMRO, a Bachelor's degree in Information Science, and a Master of Science in Management in progress, I combine strong technical depth (SQL, Python, Databricks, Power BI, Azure) with strategic thinking and a hands-on, pragmatic mentality.

I am looking for an ambitious environment where data plays a central role, collaboration is key, and there is room to grow. I believe in building, connecting, and improving one step at a time — for the team, for results, and for my own development.`}
          divider
        />

        {/* EXPERIENCE */}
        <CVSection
          title="EXPERIENCE"
          items={[
            {
              employer: "ABN AMRO MEESPIERSON",
              role: "Business Intelligence & Data Analyst",
              date: "2023–2025",
              responsibilities: [
                "Delivered ad-hoc data analyses using SQL, Python and Databricks, turning business questions into clear insights and actionable recommendations.",
                "Worked closely with stakeholders to refine requirements and priorities, ensuring results aligned with business needs and were immediately usable.",
                "Improved reporting and data pipelines for Private Banking teams, increasing consistency and reducing reporting delays.",
                "Built and enhanced Power BI dashboards, including data modelling, DAX logic and user-centric design.",
                "Automated validation and control processes using SQL, Python, Databricks, Excel and Power BI — reducing weekly manual effort from ~8 hours to ~30 minutes while improving accuracy.",
                "Implemented data-quality controls for critical reports to ensure reliability and consistency.",
                "Identified improvement and automation opportunities proactively and guided colleagues through new ways of working.",
                "Maintained continuous alignment with private bankers, product teams and risk/compliance to ensure insights supported business processes and decision-making."
              ]
            },
            {
              employer: "INTERNATIONAL CARD SERVICES",
              role: "Client Service Advisor (Creditcards)",
              date: "2022–2023",
              responsibilities: [
                "Supported customers on creditcard-related questions with care and precision.",
                "Analysed and resolved customer cases efficiently through structured problem-solving.",
                "Shared recurring signals with the team to improve internal processes and communication."
              ]
            },
            {
              employer: "EUROPA HAVE B.V.",
              role: "Store & Inventory Assistant",
              date: "2018–2021",
              responsibilities: [
                "Supported daily retail operations including stock handling and customer assistance."
              ]
            }
          ]}
          divider
        />

        {/* EDUCATION */}
        <CVSection
          title="EDUCATION"
          items={[
            {
              employer: "Open Universiteit",
              role: "Master of Science in Management",
              date: "2026 (Part-Time)",
              responsibilities: [
                "Focus on strategy, organizational change and governance.",
                "Developing analytical, leadership and decision-making capabilities."
              ]
            },
            {
              employer: "University of Amsterdam",
              role: "Bachelor of Science in Information Science",
              date: "2024",
              responsibilities: [
                "Specialized in data analysis, digital business, information management and decision support.",
                "Practical experience with SQL, Python, Power BI and data modelling."
              ]
            },
            {
              employer: "Veluws College Walterbosch",
              role: "VWO — Nature & Technology",
              date: "2021",
              responsibilities: [
                "Completed pre-university education with a technical profile."
              ]
            }
          ]}
          divider
        />

        <CVSection
        title="SKILLS"
        customContent={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

            {/* Column 1 */}
            <div className="space-y-12">

                {/* Data & Analytics */}
                <div>
                <h3 className="text-[#E8E1D5]/60 tracking-[0.22em] text-[0.75rem] mb-3 uppercase">
                    Data & Analytics Expertise
                </h3>
                <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>SQL</li>
                    <li>Python</li>
                    <li>Power BI</li>
                    <li>Databricks</li>
                    <li>Excel</li>
                    <li>ETL & Data Transformation</li>
                    <li>Data Analysis & Visualisation</li>
                </ul>
                </div>

                {/* Dashboarding */}
                <div>
                <h3 className="text-[#E8E1D5]/60 tracking-[0.22em] text-[0.75rem] mb-3 uppercase">
                    Dashboarding & Reporting
                </h3>
                <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>Dashboard Development & Reporting</li>
                    <li>Data Modelling (incl. DAX)</li>
                    <li>Automated Reporting Pipelines</li>
                    <li>KPI Design & Performance Insights</li>
                </ul>
                </div>

            </div>

            {/* Column 2 */}
            <div className="space-y-12">

                {/* Process & Quality */}
                <div>
                <h3 className="text-[#E8E1D5]/60 tracking-[0.22em] text-[0.75rem] mb-3 uppercase">
                    Process & Quality
                </h3>
                <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>Process Optimisation</li>
                    <li>Data Quality & Validation</li>
                    <li>Control Frameworks & Monitoring</li>
                    <li>Operational Efficiency & Automation</li>
                </ul>
                </div>

                {/* Stakeholders & Delivery */}
                <div>
                <h3 className="text-[#E8E1D5]/60 tracking-[0.22em] text-[0.75rem] mb-3 uppercase">
                    Stakeholders & Delivery
                </h3>
                <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>Stakeholder Management</li>
                    <li>Requirements Analysis</li>
                    <li>Translating Business Needs into Technical Solutions</li>
                    <li>Cross-functional Alignment (Bankers, Product, Risk/Compliance)</li>
                </ul>
                </div>

            </div>
            </div>
        }
        divider
        />


        <CVSection
          title="CERTIFICATIONS"
          customContent={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column 1 */}
              <div className="space-y-8">
                {/* Microsoft */}
                <div>
                  <h3 className="text-[#E8E1D5]/70 tracking-[0.18em] text-xs mb-3">
                    MICROSOFT (DATA & CLOUD)
                  </h3>
                  <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>PL-300 — Power BI Data Analyst Associate</li>
                    <li>DP-900 — Azure Data Fundamentals</li>
                    <li>AI-900 — Azure AI Fundamentals</li>
                    <li>AZ-900 — Azure Fundamentals</li>
                  </ul>
                </div>

                {/* Databricks */}
                <div>
                  <h3 className="text-[#E8E1D5]/70 tracking-[0.18em] text-xs mb-3">
                    DATABRICKS
                  </h3>
                  <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>Azure Platform Architect (expired)</li>
                    <li>Lakehouse Fundamentals (expired)</li>
                  </ul>
                </div>

                {/* Agile & Product */}
                <div>
                  <h3 className="text-[#E8E1D5]/70 tracking-[0.18em] text-xs mb-3">
                    AGILE & PRODUCT
                  </h3>
                  <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>PSM I — Professional Scrum Master</li>
                    <li>PSPO II — Professional Scrum Product Owner</li>
                  </ul>
                </div>

                {/* Business / Strategy */}
                <div>
                  <h3 className="text-[#E8E1D5]/70 tracking-[0.18em] text-xs mb-3">
                    BUSINESS, STRATEGY & MANAGEMENT
                  </h3>
                  <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>Corporate Strategy — University of London</li>
                    <li>The Manager’s Toolkit — University of London</li>
                    <li>Organizational Behavior — IESE Business School</li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                {/* Finance & Investment */}
                <div>
                  <h3 className="text-[#E8E1D5]/70 tracking-[0.18em] text-xs mb-3">
                    FINANCE & INVESTMENT
                  </h3>
                  <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>Investment Management — University of Geneva</li>
                    <li>Portfolio & Risk Management</li>
                    <li>Securing Investment Returns in the Long Run</li>
                    <li>Meeting Investors&apos; Goals</li>
                    <li>Understanding Financial Markets</li>
                    <li>Planning Wealth over a 5-Year Horizon</li>
                    <li>FinTech Foundations — Wharton Online</li>
                  </ul>
                </div>

                {/* Regulatory & Professional */}
                <div>
                  <h3 className="text-[#E8E1D5]/70 tracking-[0.18em] text-xs mb-3">
                    REGULATORY & PROFESSIONAL
                  </h3>
                  <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>WFT Basis</li>
                    <li>ICC Inland Waters (KVB1)</li>
                    <li>ICC Inland & Coastal Waters (KVB2)</li>
                  </ul>
                </div>

                {/* Other Credentials */}
                <div>
                  <h3 className="text-[#E8E1D5]/70 tracking-[0.18em] text-xs mb-3">
                    OTHER CREDENTIALS
                  </h3>
                  <ul className="space-y-1.5 text-[0.95rem] text-[#E8E1D5]/90">
                    <li>Cambridge English C1 — Grade B</li>
                    <li>Digital Analytics — Thuiswinkel.org</li>
                    <li>VWO Diploma — Veluws College Walterbosch</li>
                  </ul>
                </div>
              </div>
            </div>
          }
          divider
        />

        {/* LANGUAGES */}
        <CVSection
          title="LANGUAGES"
          items={[
            { responsibilities: ["Dutch • English • Indonesian • Italian"] }
          ]}
          divider
        />

        {/* LINK */}
        <CVSection
          title="LINK"
          items={[
            { responsibilities: ["LinkedIn: www.linkedin.com/in/gregoriusdewild"] }
          ]}
        />

      </div>
    </section>
  );
}
