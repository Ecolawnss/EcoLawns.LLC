import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck } from "lucide-react";

export default function ServiceArea() {
  return (
    <section id="area" className="relative py-24 lg:py-32 bg-cypress cut-top">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-clay text-sm tracking-[0.3em] uppercase font-body block mb-4">
              Coverage
            </span>
            <h2 className="font-heading text-humus text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
              The Delta<br />
              <span className="text-clay">Radius</span>
            </h2>
            <p className="text-humus/70 font-body text-lg mb-10 max-w-md">
              We serve the Greater Baton Rouge area within a 30-minute driving 
              radius. From Denham Springs to Port Allen, Gonzales to Baker — 
              if you're within reach, we're on our way.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Baton Rouge & Surrounding", desc: "Central hub with a 30-minute service radius" },
                { icon: Clock, title: "Prompt Scheduling", desc: "Flexible availability, fast response times" },
                { icon: Truck, title: "Fully Equipped", desc: "We arrive with everything needed — no delays" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-humus flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-clay" />
                  </div>
                  <div>
                    <h3 className="font-heading text-humus font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-humus/60 font-body text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Stylized map visualization */}
            <div className="relative aspect-square bg-humus p-8 overflow-hidden">
              {/* Concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-full border border-clay/10" />
                <div className="absolute w-[70%] h-[70%] rounded-full border border-clay/15" />
                <div className="absolute w-[50%] h-[50%] rounded-full border border-clay/20" />
                <div className="absolute w-[30%] h-[30%] rounded-full border border-clay/30" />
                <div className="absolute w-4 h-4 rounded-full bg-clay" />
              </div>

              {/* Grid lines */}
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-moss/5" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-moss/5" />
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-moss/3" />
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-moss/3" />
                <div className="absolute top-1/4 left-0 right-0 h-px bg-moss/3" />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-moss/3" />
              </div>

              {/* Location labels */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute text-clay font-body text-xs tracking-widest uppercase font-semibold">
                  Baton Rouge
                </span>
                <span className="absolute top-[18%] right-[20%] text-moss/40 font-body text-[10px] tracking-wider uppercase">
                  Denham Springs
                </span>
                <span className="absolute bottom-[22%] left-[15%] text-moss/40 font-body text-[10px] tracking-wider uppercase">
                  Port Allen
                </span>
                <span className="absolute bottom-[15%] right-[25%] text-moss/40 font-body text-[10px] tracking-wider uppercase">
                  Gonzales
                </span>
                <span className="absolute top-[22%] left-[18%] text-moss/40 font-body text-[10px] tracking-wider uppercase">
                  Baker
                </span>
                <span className="absolute top-[35%] right-[12%] text-moss/40 font-body text-[10px] tracking-wider uppercase">
                  Central
                </span>
                <span className="absolute bottom-[35%] left-[10%] text-moss/40 font-body text-[10px] tracking-wider uppercase">
                  Plaquemine
                </span>
              </div>

              {/* 30-min label */}
              <div className="absolute bottom-6 right-6 text-right">
                <span className="text-clay font-heading text-3xl font-bold">30</span>
                <span className="text-moss/50 font-body text-xs tracking-wider uppercase block">
                  Min Radius
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
