import Link from "next/link";
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const footerLinks = [
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

const services = [
  "Residential building",
  "Renovations",
  "Commercial construction",
  "Property maintenance",
  "Roofing repairs",
  "External works",
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] px-5 py-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black uppercase tracking-[-0.04em]">
            Drini Construction
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
            Residential building, renovations, commercial construction,
            specialised trade services, property maintenance, repairs and
            external works.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#f59e0b] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#171717] transition hover:bg-white"
            >
              Request quote
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:07476401496"
              className="inline-flex items-center justify-center gap-2 border border-white/15 px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-white"
            >
              <FiPhone />
              Call now
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
            Pages
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
            Services
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            {services.map((service) => (
              <p key={service}>{service}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
            Contact
          </p>

          <div className="mt-4 flex flex-col gap-4 text-sm text-white/60">
            <a
              className="flex items-start gap-3 hover:text-white"
              href="tel:07476401496"
            >
              <FiPhone className="mt-1 shrink-0 text-[#f59e0b]" />
              <span>07476 401496</span>
            </a>

            <a
              className="flex items-start gap-3 hover:text-white"
              href="mailto:info@driniconstruction.co.uk"
            >
              <FiMail className="mt-1 shrink-0 text-[#f59e0b]" />
              <span>info@driniconstruction.co.uk</span>
            </a>

            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1 shrink-0 text-[#f59e0b]" />
              <span>
                Dartford,
                <br />
                Kent
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
              Hours
            </p>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Monday-Friday
              <br />
              8:00am – 6:00pm
              <br />
              Saturday-Sunday closed
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
        <p>
          © {new Date().getFullYear()} Drini Construction Ltd. All rights
          reserved.
        </p>
        <p>Construction, renovation and maintenance services.</p>
      </div>
    </footer>
  );
}