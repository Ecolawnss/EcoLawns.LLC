import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, description, image, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${title} service by Ecolawns in Baton Rouge`}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            hovered
              ? "bg-clay/70"
              : "bg-gradient-to-t from-humus/90 via-humus/30 to-transparent"
          }`}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-heading text-cypress text-xl lg:text-2xl font-semibold mb-1">
                {title}
              </h3>
              <p
                className={`text-cypress/80 text-sm font-body transition-all duration-500 max-w-xs ${
                  hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {description}
              </p>
            </div>
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full border border-cypress/30 flex items-center justify-center transition-all duration-300 ${
                hovered ? "bg-cypress text-humus" : "text-cypress"
              }`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Index number */}
        <span className="absolute top-4 left-6 font-body text-cypress/20 text-xs tracking-widest">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}
