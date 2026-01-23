"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/styles/animations";

interface ImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageBreak({ src, alt, caption }: ImageBreakProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="relative w-full"
    >
      <div className="relative h-64 w-full overflow-hidden md:h-80 lg:h-96">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          quality={95}
          sizes="100vw"
          priority
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>
      {caption && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-text-primary shadow-lg backdrop-blur-sm">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
