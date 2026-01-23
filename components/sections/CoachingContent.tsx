"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Shield, Users, Target, CheckCircle } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// What We Work On - coaching offerings
const offerings = [
  {
    icon: Compass,
    title: "Strategic Decision-Making in Ambiguity",
    description:
      "Million-dollar AI investments with incomplete information. We develop frameworks that help you move decisively while managing technical, regulatory, and reputational uncertainty.",
  },
  {
    icon: Shield,
    title: "Building Responsible AI Programs That Scale",
    description:
      "Beyond compliance theater. Design governance structures that enable innovation, translating fairness and transparency requirements into operational reality.",
  },
  {
    icon: Users,
    title: "Leading Through Technological Disruption",
    description:
      "Your team is anxious. Your board has questions. Your customers have concerns. We work on the human dimension of AI leadership—communicating uncertainty, building trust, making ethical calls when there's no clear answer.",
  },
  {
    icon: Target,
    title: "Personal Leadership Development",
    description:
      "Leading at the intersection of technology and humanity requires holding technical complexity, regulatory nuance, ethical tensions, and human impact simultaneously. We develop that capacity.",
  },
];

// Who This Is For
const clientTypes = [
  "C-suite executives implementing AI strategy across their organizations",
  "Chief AI Officers and VPs building responsible AI programs from scratch",
  "General Counsels and Policy Leaders translating regulation into competitive advantage",
  "Founders and Senior Leaders at AI companies navigating growth and governance simultaneously",
];

function CoachingHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-end to-background-dark text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex min-h-[70vh] flex-col items-center gap-12 py-24 lg:flex-row lg:items-center lg:py-0">
          <motion.div
            className="flex flex-1 flex-col justify-center lg:py-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-base font-medium text-accent"
            >
              Executive Coaching
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h1)] font-bold leading-tight tracking-tight text-white"
            >
              Navigate AI&apos;s Complexity
              <br />
              <span className="text-accent">With Confidence</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[520px] text-lg leading-relaxed text-text-on-dark-muted"
            >
              Lead with both innovation and integrity. One-on-one coaching for
              executives navigating AI strategy, governance, and the human
              dimension of technological leadership.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">Let&apos;s Talk</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex flex-1 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/headshots/sean-formal.jpg"
                  alt="Sean Perryman - Executive Coach"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={slideInLeft}>
            <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
              How We Work
            </h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              1:1 coaching engagements typically run 3-6 months with biweekly
              sessions. Between sessions, you&apos;re implementing—I&apos;m
              available for real-time challenges as they emerge.
            </p>

            <p className="mt-6 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              As a certified executive coach with practitioner experience
              designing AI governance for global operations, advising Congress
              on algorithmic accountability, and teaching AI ethics at
              Vanderbilt Law, I bring both coaching methodology and hard-won
              expertise to leadership challenges that are fundamentally
              unprecedented.
            </p>
          </motion.div>

          <motion.div variants={slideInRight} className="flex items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/headshots/sean-about.jpg"
                alt="Sean Perryman - Executive Coaching"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

function OfferingsSection() {
  return (
    <Section background="light" padding="lg" className="bg-background-alt">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            What We Work On
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {offerings.map((offering) => (
            <motion.div
              key={offering.title}
              variants={scaleUp}
              className="group rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <offering.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {offering.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function ClientTypesSection() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl"
      >
        <motion.div variants={fadeInUp} className="mb-10 text-center">
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            Who This Is For
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {clientTypes.map((client) => (
            <motion.div
              key={client}
              variants={fadeInUp}
              className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-[length:var(--text-body)] text-text-secondary">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function CoachingCTA() {
  return (
    <Section background="light" padding="xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
        >
          Let&apos;s Talk
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary"
        >
          Let&apos;s have a conversation about whether this is right for what
          you&apos;re navigating.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Schedule a Conversation</Button>
          </Link>
          <Link href="/services/consulting">
            <Button variant="secondary" size="lg">
              View Consulting
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}

export function CoachingContent() {
  return (
    <>
      <CoachingHero />
      <ProcessSection />
      <OfferingsSection />
      <ClientTypesSection />
      <CoachingCTA />
    </>
  );
}
