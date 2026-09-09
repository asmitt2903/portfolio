"use client";

import { motion } from "framer-motion";
import { FileText, FileDown, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity:0, scale:0.96 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="relative glass-card p-10 sm:p-14 rounded-3xl border border-[#3F1111] text-center overflow-hidden shadow-2xl"
        >
          {/* Ambient red glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              Curriculum Vitae
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
              Want to know more{" "}
              <span className="text-gradient-cyan">about me?</span>
            </h2>

            <p className="text-[#8A8A8A] text-base sm:text-lg leading-relaxed">
              Check out my resume to explore my technical skills, projects, and full-stack development experience in detail.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={personalInfo.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-800 to-red-600 rounded-xl shadow-xl shadow-red-900/30 hover:shadow-red-700/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                View Resume
              </a>
              <a
                href={personalInfo.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-[#F5F5F5] bg-[#0D0D0D] hover:bg-[#121212] border border-[#3F1111] hover:border-[#6B1A1A] rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              >
                <FileDown className="w-5 h-5 text-red-500" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
