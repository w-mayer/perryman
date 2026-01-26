"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";

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
        {/* First Block */}
        <motion.div variants={fadeInUp}>
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            Translating AI Policy Into Business Strategy
          </h2>
          <div className="mt-6 space-y-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
            <p>
              For over a decade, Sean Perryman has worked where technology policy,
              corporate strategy, and ethical implementation intersect. He doesn&apos;t
              just analyze what regulations mean—he helps you understand what they
              mean for your business. How will compliance requirements impact your
              product timeline? Where do cost-saving algorithms create legal or
              reputational risk? Sean connects policy to the strategic and ethical
              questions leaders are actually wrestling with.
            </p>
            <p>
              From advising Congress on AI accountability to creating Uber&apos;s first
              EU algorithmic transparency report, Sean has an unusual breadth of
              knowledge on the AI ecosystem, spanning policy expertise, strategic
              foresight, and hands-on implementation experience.
            </p>
            <p>
              He helps leaders cut through the noise to understand what actually
              matters—and how to act on it.
            </p>
          </div>
        </motion.div>

        {/* Second Block */}
        <motion.div variants={fadeInUp} className="mt-12">
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            Strategic Clarity in a Complex Landscape
          </h2>
          <div className="mt-6 space-y-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
            <p>
              Sean works with organizations navigating the messy reality of AI
              implementation—where ethics, regulation, competitive advantage, and
              risk all collide. His approach combines regulatory insight, strategic
              thinking, and practical experience to help you make better decisions
              faster.
            </p>
            <p>
              Whether you&apos;re a Fortune 500 company navigating AI regulation, a
              startup building responsible systems from the ground up, or an academic
              institution developing curriculum, Sean translates complex policy into
              actionable strategy.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
