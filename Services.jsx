import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    title: "Sod Installation",
    description: "Premium sod laid with precision for an instant, lush green lawn that transforms your property overnight.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/fd51f0373_generated_01d5df78.png",
  },
  {
    title: "Bush Trimming",
    description: "Geometric precision cuts that bring shape and structure back to your hedges and ornamental shrubs.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/060b8753e_generated_1536705d.png",
  },
  {
    title: "Lawn Makeover",
    description: "Complete backyard restoration — from overgrown chaos to pristine landscape. Our signature service.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/242049084_generated_928e60f8.png",
  },
  {
    title: "Leaf Pickup",
    description: "Seasonal cleanup that removes every last leaf, restoring your lawn's clean, healthy appearance.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/efad8c603_generated_70129044.png",
  },
  {
    title: "Weed Control",
    description: "Targeted treatment and prevention that keeps invasive weeds out and your lawn thriving year-round.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/5e7584e51_generated_aab52dbd.png",
  },
  {
    title: "Fence Work",
    description: "Professional fence installation and repair — privacy, security, and curb appeal built to last.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/55dbfc420_generated_2c47a842.png",
  },
  {
    title: "Small Tree Removal",
    description: "Safe, efficient removal of small trees and stumps that reclaim your yard space and sight lines.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/50c218876_generated_847702ab.png",
  },
  {
    title: "Mulch Installation",
    description: "Fresh mulch beds that protect roots, retain moisture, and add rich, polished definition to your landscape.",
    image: "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/33ed599a7_generated_c1a52658.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-humus">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-clay text-sm tracking-[0.3em] uppercase font-body block mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-cypress text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Service<br />Topography
          </h2>
          <p className="text-moss/70 text-lg max-w-xl font-body">
            Eight specialized services, one family-owned commitment — 
            every yard treated like our own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
