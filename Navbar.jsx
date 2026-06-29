import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Service Area", href: "#area" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-humus/95 backdrop-blur-md border-b border-clay/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/6972e50ab_IMG_3536.jpeg"
              alt="Ecolawns LLC Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-heading text-cypress text-xl font-semibold tracking-tight">
              ECOLAWNS
            </span>
            <span className="text-moss/50 text-xs font-body tracking-widest uppercase">
              LLC
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-moss/70 hover:text-clay transition-colors text-sm tracking-wider uppercase font-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:4082301384"
              className="flex items-center gap-2 bg-clay text-cypress px-5 py-2.5 text-sm tracking-wider uppercase hover:bg-clay/90 transition-colors min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              408-230-1384
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-cypress p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-humus/98 backdrop-blur-md border-t border-clay/20">
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-moss hover:text-clay transition-colors text-base tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:4082301384"
              className="flex items-center justify-center gap-2 bg-clay text-cypress px-5 py-3 text-sm tracking-wider uppercase mt-4 min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              408-230-1384
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
