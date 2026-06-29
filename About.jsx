import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, value: "2", label: "Years of Service" },
  { icon: Users, value: "Family", label: "Owned & Operated" },
  { icon: MapPin, value: "30 min", label: "Radius Coverage" },
  { icon: Shield, value: "100%", label: "Satisfaction Focus" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cypress py-24 lg:py-32 cut-top cut-bottom">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-clay text-sm tracking-[0.3em] uppercase font-body block mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-humus text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Baton Rouge<br />
              Rooted. Family<br />
              <span className="text-clay">Driven.</span>
            </h2>
            <div className="space-y-5 text-humus/70 font-body">
              <p>
                Ecolawns, LLC was born from a simple belief: every yard in Baton Rouge 
                deserves the same level of care and precision that we'd give our own family's 
                home. For nearly two years, we've been transforming landscapes across the 
                Greater Baton Rouge area — one backyard at a time.
              </p>
              <p>
                As a family-owned operation, we don't cut corners — we cut grass. From 
                complete lawn makeovers of overgrown properties to precision sod installation 
                and fence work, every project gets our full attention and personal 
                accountability. We serve clients within a 30-minute radius of Baton Rouge 
                because we believe in knowing our community and being there when you need us.
              </p>
              <p>
                When you call Ecolawns, you're not getting a call center. You're getting a 
                family that takes pride in restoring your outdoor space to something 
                remarkable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-humus p-8 flex flex-col items-start"
                >
                  <stat.icon className="w-6 h-6 text-clay mb-4" />
                  <span className="font-heading text-cypress text-3xl lg:text-4xl font-bold mb-1">
                    {stat.value}
                  </span>
                  <span className="text-moss/60 text-sm tracking-wider uppercase font-body">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
