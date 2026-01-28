"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { VALUE_PROPOSITION } from "@/lib/content";

export function ValueProposition() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl"
      >
        {VALUE_PROPOSITION.blocks.map((block, index) => (
          <motion.div key={block.heading} variants={fadeInUp} className={index > 0 ? "mt-12" : undefined}>
            <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
              {block.heading}
            </h2>
            <div className="mt-6 space-y-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
