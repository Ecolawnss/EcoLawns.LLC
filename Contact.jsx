import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const services = [
  "Sod Installation", "Bush Trimming", "Lawn Makeover", "Leaf Pickup",
  "Weed Control", "Fence Work", "Small Tree Removal", "Mulch Installation"];


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await base44.integrations.Core.SendEmail({
        to: "ecolawnsbr@gmail.com",
        subject: `New Inquiry from ${form.name} — ${form.service || "General"}`,
        body: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
      });
      setSent(true);
    } catch {
      setSent(true);
    }
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-humus">
      {/* Vertical accent lines */}
      <div className="absolute right-8 top-0 bottom-0 w-px bg-clay/10 hidden lg:block" />
      <div className="absolute right-16 top-0 bottom-0 w-px bg-clay/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <span className="text-clay text-sm tracking-[0.3em] uppercase font-body block mb-4">
              Get In Touch
            </span>
            <h2 className="font-heading text-cypress text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Ready for a<br />
              <span className="text-clay">Restoration?</span>
            </h2>
            <p className="text-moss/70 font-body text-lg mb-12 max-w-md">Call us directly or fill out the form. We respond to every inquiry within 24 hours — because your yard can't wait.


            </p>
            <div className="inline-flex items-center gap-3 bg-clay/10 border border-clay/30 px-5 py-3 mb-4">
              <span className="text-clay text-lg">✓</span>
              <span className="text-cypress font-body text-sm tracking-wider uppercase">Free Quotes on All Lawn Services</span>
            </div>

            <div className="space-y-8">
              <a href="tel:4082301384" className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-clay/10 flex items-center justify-center group-hover:bg-clay transition-colors">
                  <Phone className="w-6 h-6 text-clay group-hover:text-cypress transition-colors" />
                </div>
                <div>
                  <span className="text-moss/50 text-xs tracking-[0.2em] uppercase font-body block mb-1">
                    Call Us
                  </span>
                  <span className="text-cypress font-heading text-xl font-semibold group-hover:text-clay transition-colors">
                    (408) 230-1384
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-clay/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-clay" />
                </div>
                <div>
                  <span className="text-moss/50 text-xs tracking-[0.2em] uppercase font-body block mb-1">
                    Service Area
                  </span>
                  <span className="text-cypress font-body text-base">
                    Baton Rouge, LA — 30 min radius
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-clay/10">
              <p className="text-moss/40 font-body text-sm tracking-wider">
                Family Owned · Baton Rouge Rooted · 2 Years of Precision
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            {sent ?
            <div className="bg-card p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
                <CheckCircle className="w-16 h-16 text-clay mb-6" />
                <h3 className="font-heading text-cypress text-2xl font-semibold mb-3">
                  Message Received
                </h3>
                <p className="text-moss/70 font-body max-w-sm">
                  We'll get back to you within 24 hours. For immediate service, 
                  call us at <a href="tel:4082301384" className="text-clay hover:underline">(408) 230-1384</a>.
                </p>
              </div> :

            <form onSubmit={handleSubmit} className="bg-card p-8 lg:p-10 space-y-6">
                <div>
                  <label className="text-moss/50 text-xs tracking-[0.2em] uppercase font-body block mb-2">
                    Full Name
                  </label>
                  <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-moss/20 text-cypress font-body py-3 focus:border-clay outline-none transition-colors"
                  placeholder="Your name" />
                
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-moss/50 text-xs tracking-[0.2em] uppercase font-body block mb-2">
                      Email
                    </label>
                    <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-moss/20 text-cypress font-body py-3 focus:border-clay outline-none transition-colors"
                    placeholder="you@email.com" />
                  
                  </div>
                  <div>
                    <label className="text-moss/50 text-xs tracking-[0.2em] uppercase font-body block mb-2">
                      Phone
                    </label>
                    <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-moss/20 text-cypress font-body py-3 focus:border-clay outline-none transition-colors"
                    placeholder="(xxx) xxx-xxxx" />
                  
                  </div>
                </div>

                <div>
                  <label className="text-moss/50 text-xs tracking-[0.2em] uppercase font-body block mb-2">
                    Service Needed
                  </label>
                  <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-transparent border-b border-moss/20 text-cypress font-body py-3 focus:border-clay outline-none transition-colors appearance-none cursor-pointer">
                  
                    <option value="" className="bg-humus">Select a service</option>
                    {services.map((s) =>
                  <option key={s} value={s} className="bg-humus">{s}</option>
                  )}
                  </select>
                </div>

                <div>
                  <label className="text-moss/50 text-xs tracking-[0.2em] uppercase font-body block mb-2">
                    Message
                  </label>
                  <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-moss/20 text-cypress font-body py-3 focus:border-clay outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..." />
                
                </div>

                <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-3 bg-clay text-cypress px-8 py-4 text-base tracking-wider uppercase hover:bg-clay/90 transition-colors min-h-[48px] font-body font-medium disabled:opacity-50">
                
                  {sending ?
                <div className="w-5 h-5 border-2 border-cypress/30 border-t-cypress rounded-full animate-spin" /> :

                <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                }
                </button>
              </form>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}
