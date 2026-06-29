import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/1e6d0d74e_generated_6f293f75.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Pristine landscaped backyard in Baton Rouge at golden hour with fresh sod and mulched beds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-humus/95 via-humus/80 to-humus/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-humus via-transparent to-transparent" />
      </div>

      {/* Vertical accent lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-clay/10 hidden lg:block" />
      <div className="absolute left-16 top-0 bottom-0 w-px bg-clay/5 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-clay text-sm tracking-[0.3em] uppercase font-body mb-6">
              Baton Rouge, Louisiana
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-cypress text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          >
            Baton Rouge's<br />
            Trusted Lawn<br />
            <span className="text-clay">& Landscape</span><br />
            Experts.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-moss/80 text-lg lg:text-xl max-w-xl mb-10 font-body leading-relaxed"
          >
            Family-owned precision landscaping. From overgrown to outstanding — 
            we transform Baton Rouge yards with two years of dedicated craftsmanship.{" "}
            <span className="text-clay font-medium">Free quotes on all lawn services.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:4082301384"
              className="inline-flex items-center justify-center gap-3 bg-clay text-cypress px-8 py-4 text-base tracking-wider uppercase hover:bg-clay/90 transition-colors min-h-[48px] font-body font-medium"
            >
              <Phone className="w-5 h-5" />
              Request Restoration
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-moss/30 text-moss px-8 py-4 text-base tracking-wider uppercase hover:border-clay hover:text-clay transition-colors min-h-[48px] font-body"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-moss/40 hover:text-clay transition-colors"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
