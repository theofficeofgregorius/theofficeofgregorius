"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CVItem = {
  employer?: string;
  role?: string;
  date?: string;
  responsibilities?: string[];
};

interface CVSectionProps {
  title: string;
  paragraph?: string;
  items?: CVItem[];
  divider?: boolean;
  customContent?: ReactNode;
}

export default function CVSection({
  title,
  paragraph,
  items,
  divider = false,
  customContent,
}: CVSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-[#E8E1D5]"
    >
      {/* SECTION TITLE */}
      <h2 className="tracking-[0.22em] text-sm mb-7 opacity-70 font-light text-[#E8E1D5]">
        {title}
      </h2>

      {/* Custom layout (skills grid etc.) */}
      {customContent ? (
        <div className="opacity-90 text-[0.95rem] leading-relaxed">
          {customContent}
        </div>
      ) : paragraph ? (
        /* ABOUT ME paragraph */
        <p className="max-w-3xl opacity-90 text-[1rem] leading-[1.7] whitespace-pre-line">
          {paragraph}
        </p>
      ) : items && items.length > 0 ? (
        /* EXPERIENCE / EDUCATION section */
        <div className="space-y-12 opacity-90 text-[0.97rem] leading-relaxed">
          {items.map((item, idx) => (
            <div key={idx} className="">
              
              {/* EMPLOYER */}
              {item.employer && (
                <h3 className="text-[1.03rem] tracking-[0.08em] font-medium text-[#E8E1D5] mb-1">
                  {item.employer}
                </h3>
              )}

              {/* ROLE + DATE */}
              {(item.role || item.date) && (
                <p className="text-[0.9rem] text-[#E8E1D5]/70 leading-tight">
                  {item.role && (
                    <span className="text-[#E8E1D5]/85">
                      {item.role}
                    </span>
                  )}
                  {item.role && item.date && " — "}
                  {item.date && <span className="opacity-70">{item.date}</span>}
                </p>
              )}

              {/* BULLETS */}
              {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="mt-3 space-y-1.5 list-disc list-outside pl-5">
                {item.responsibilities.map((line, i) => {
                  // Auto-detect LinkedIn link
                  if (line.toLowerCase().includes("linkedin")) {
                    return (
                      <li key={i} className="list-none pl-0">
                        <a
                          href="https://www.linkedin.com/in/gregoriusdewild"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#E8E1D5]/80 hover:text-[#E8E1D5] transition-colors underline decoration-[#E8E1D5]/30 hover:decoration-[#E8E1D5]/70"
                        >
                          LinkedIn: www.linkedin.com/in/gregoriusdewild
                        </a>
                      </li>
                    );
                  }

                  // Default bullet point
                  return <li key={i}>{line}</li>;
                })}
              </ul>
              )}
            </div>
          ))}
        </div>
      ) : null}

      {/* Divider */}
      {divider && (
        <div className="mt-12 w-full h-px bg-[#E8E1D5]/10" />
      )}
    </motion.div>
  );
}
