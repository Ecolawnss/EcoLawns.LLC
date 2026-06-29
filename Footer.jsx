import React from "react";
import { Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-humus border-t border-clay/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
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
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Service Area", href: "#area" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-moss/50 hover:text-clay transition-colors text-sm tracking-wider uppercase font-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone */}
          <a
            href="tel:4082301384"
            className="flex items-center gap-2 text-clay hover:text-clay/80 transition-colors font-body text-sm tracking-wider"
          >
            <Phone className="w-4 h-4" />
            (408) 230-1384
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-clay/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-moss/30 font-body text-xs tracking-wider">
            © {currentYear} Ecolawns, LLC. All rights reserved.
          </p>
          <p className="text-moss/30 font-body text-xs tracking-wider">
            Family Owned & Operated · Baton Rouge, Louisiana
          </p>
        </div>
      </div>
    </footer>
  );
}
