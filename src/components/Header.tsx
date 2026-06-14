"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui";
import { siteConfig } from "@/content/site";

const navLinks = [
  { href: "#what-we-do", label: "What we do" },
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          Altamar<span className="text-brass-ink"> Consulting</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.bookingUrl}>Book a call</Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-text" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text" />
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-paper px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base text-text"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href={siteConfig.bookingUrl} className="w-full">
                Book a call
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
