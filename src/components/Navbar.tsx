"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiArrowRight, FiMenu, FiPhone, FiX } from "react-icons/fi";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function isActivePath(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#171717]/10 bg-[#efede7]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
        <Link href="/" onClick={closeMenu} className="group">
          <p className="text-lg font-black uppercase tracking-[-0.04em] text-[#171717]">
            Drini Construction
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#b45309]">
            Building · Renovation · Maintenance
          </p>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#4f4b43] md:flex">
          {navLinks.map((link) => {
            const active = isActivePath(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-[#b45309] ${
                  active ? "text-[#b45309]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:07476401496"
            className="border border-[#171717]/10 bg-[#f8f6ef] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#171717] transition hover:border-[#b45309] hover:text-[#b45309]"
          >
            07476 401496
          </a>

          <Link
            href="/contact"
            className="bg-[#171717] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b45309]"
          >
            Request quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="inline-flex h-11 w-11 items-center justify-center border border-[#171717]/10 bg-[#f8f6ef] text-[#171717] transition hover:border-[#b45309] hover:text-[#b45309] md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#171717]/10 bg-[#efede7] md:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5">
            <nav className="grid gap-3">
              {navLinks.map((link) => {
                const active = isActivePath(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between border px-4 py-4 text-sm font-black uppercase tracking-[0.16em] transition ${
                      active
                        ? "border-[#b45309] bg-[#171717] text-white"
                        : "border-[#171717]/10 bg-[#f8f6ef] text-[#171717] hover:border-[#b45309]"
                    }`}
                  >
                    {link.label}
                    <FiArrowRight />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:07476401496"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-[#f59e0b] px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#171717]"
              >
                <FiPhone />
                Call now
              </a>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-[#171717] px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-white"
              >
                Request quote
                <FiArrowRight />
              </Link>
            </div>

            <p className="mt-5 border-t border-[#171717]/10 pt-4 text-xs leading-6 text-[#5f5b52]">
              Residential building, renovations, commercial construction,
              specialised trade services, maintenance, repairs and external
              works.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}