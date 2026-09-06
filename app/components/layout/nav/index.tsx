"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo.png";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Cabinet" },
  { href: "/domaines", label: "Domaines" },
  { href: "/honoraires", label: "Honoraires" },
];

export default function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid ? "bg-navy-950" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="Cabinet Cohen" className="h-14 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest text-ivory/90 hover:text-brass transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-ivory"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-navy-950 px-6 pb-6 flex flex-col gap-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-ivory/90 hover:text-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}