"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiGrid,
  FiHome,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTool,
} from "react-icons/fi";

const IMG_PADDING = 12;

const services = [
  {
    title: "Residential Building & Renovations",
    text: "Bespoke construction and renovation services for homes, from planning the work through to a clean finished result.",
    href: "/services#residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Commercial Construction",
    text: "Practical commercial construction services focused on functional spaces, presentation and long-term use.",
    href: "/services#commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Specialised Trade Services",
    text: "Plumbing, electrical work and carpentry support handled with precision, skill and attention to detail.",
    href: "/services#trades",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Property Maintenance & Repairs",
    text: "Roofing repairs, general upkeep and repair services designed to keep properties safe, usable and looking right.",
    href: "/services#maintenance",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Landscaping & External Works",
    text: "External works and outdoor improvements that help improve kerb appeal, access and usable space around a property.",
    href: "/services#external",
    image:
      "https://images.unsplash.com/photo-1590375466428-8dc638f5b32f?q=80&w=2070&auto=format&fit=crop",
  },
];

const stats = [
  {
    icon: FiHome,
    title: "Residential",
    text: "Renovations, building work and home improvement projects.",
  },
  {
    icon: FiGrid,
    title: "Commercial",
    text: "Functional construction work for business spaces.",
  },
  {
    icon: FiTool,
    title: "Trade Services",
    text: "Plumbing, electrical and carpentry support.",
  },
  {
    icon: FiShield,
    title: "Maintenance",
    text: "Repairs, roofing support and general upkeep.",
  },
];

const process = [
  {
    title: "Site discussion",
    text: "The job starts with a proper conversation about the property, the scope, the timescale and the expected finish.",
  },
  {
    title: "Clear planning",
    text: "Materials, trade requirements and practical stages are reviewed before work begins, helping the job stay organised.",
  },
  {
    title: "Safe delivery",
    text: "Work is carried out with a focus on safety, communication and keeping disruption as controlled as possible.",
  },
  {
    title: "Proper finish",
    text: "The final stage focuses on clean completion, details and making sure the space is ready to use.",
  },
];

const trustPoints = [
  "Safety-focused approach",
  "Residential and commercial capability",
  "Transparent communication",
  "Skilled construction professionals",
  "Maintenance and repair support",
  "Practical project delivery",
];

const imageStrip = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
];

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#efede7] text-[#171717]">
      {/* ================= HERO ================= */}
      <section className="w-full overflow-hidden border-b border-[#171717]/10 bg-[#171717] text-white">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-5 px-4 py-8 sm:px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="flex min-w-0 flex-col justify-between border border-white/10 bg-[#101010] p-5 sm:p-6 md:p-9">
            <div className="min-w-0">
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="border border-[#f59e0b] bg-[#f59e0b] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#171717] sm:tracking-[0.18em]">
                  Construction
                </span>

                <span className="border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/60 sm:tracking-[0.18em]">
                  Renovation
                </span>

                <span className="border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/60 sm:tracking-[0.18em]">
                  Maintenance
                </span>
              </div>

              <h1 className="max-w-5xl break-words text-[clamp(2.6rem,13vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-7xl">
                Construction work built around quality, safety and trust.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-xl">
                Drini Construction Ltd delivers residential building,
                renovations, commercial construction, specialised trade
                services, property maintenance, repairs and external works.
              </p>
            </div>

            <div className="mt-10 grid min-w-0 gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="group flex min-w-0 items-center justify-between gap-3 border border-[#f59e0b] bg-[#f59e0b] px-5 py-5 text-sm font-black uppercase tracking-[0.12em] text-[#171717] transition hover:border-white hover:bg-white sm:tracking-[0.16em]"
              >
                <span>Request quote</span>
                <FiArrowRight className="shrink-0 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:07476401496"
                className="group flex min-w-0 items-center justify-between gap-3 border border-white/15 px-5 py-5 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white hover:text-[#171717] sm:tracking-[0.16em]"
              >
                <span>Call now</span>
                <FiPhone className="shrink-0" />
              </a>
            </div>
          </div>

          <div className="grid min-w-0 gap-5">
            <div className="relative min-h-[420px] w-full overflow-hidden border border-white/10 bg-[#0d0d0d] lg:min-h-[560px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute left-4 top-4 border border-white/15 bg-[#101010]/90 px-4 py-3 sm:left-5 sm:top-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f59e0b] sm:tracking-[0.18em]">
                  Professionals on demand
                </p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 border border-white/15 bg-[#101010]/90 p-4 sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                <p className="break-words text-[clamp(1.35rem,7vw,2rem)] font-black uppercase leading-none tracking-[-0.05em]">
                  Building, renovation and maintenance services for practical
                  spaces.
                </p>
              </div>
            </div>

            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              <div className="min-w-0 border border-white/10 bg-[#262626] p-6">
                <FiClock className="mb-5 text-2xl text-[#f59e0b]" />
                <p className="break-words text-3xl font-black uppercase tracking-[-0.05em]">
                  Mon–Fri
                </p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Available 8:00am – 6:00pm for enquiries.
                </p>
              </div>

              <div className="min-w-0 border border-white/10 bg-[#262626] p-6">
                <FiMapPin className="mb-5 text-2xl text-[#f59e0b]" />
                <p className="break-words text-3xl font-black uppercase tracking-[-0.05em]">
                  Dartford
                </p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Construction services across Dartford and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="w-full overflow-hidden border-b border-[#171717]/10 bg-[#f8f6ef]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-[#171717]/10 px-4 sm:px-5 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8 lg:px-10">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="min-w-0 py-8 md:px-7">
                <Icon className="mb-5 text-2xl text-[#b45309]" />
                <p className="break-words text-2xl font-black uppercase tracking-[-0.04em]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5b52]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-4 py-20 sm:px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-24 lg:px-10">
        <div className="min-w-0">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b45309] sm:tracking-[0.22em]">
            Drini Construction Ltd
          </p>

          <h2 className="mt-4 break-words text-[clamp(2.4rem,10vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
            Skilled construction professionals with a practical approach.
          </h2>
        </div>

        <div className="min-w-0 space-y-6 text-base leading-8 text-[#4f4b43] md:text-lg">
          <p>
            Construction work needs more than just tools on site. It needs clear
            communication, the right trades, safe working methods and a team
            that understands how to take a space from an idea to a finished
            result.
          </p>

          <p>
            Drini Construction brings together experienced professionals from
            different construction disciplines, covering residential,
            commercial, trade, maintenance and external work.
          </p>

          <div className="grid min-w-0 gap-3 pt-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex min-w-0 items-center gap-3 border border-[#171717]/10 bg-[#f8f6ef] p-4"
              >
                <FiCheckCircle className="shrink-0 text-[#b45309]" />
                <span className="min-w-0 break-words text-sm font-bold">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE STRIP ================= */}
      <section className="grid w-full grid-cols-2 overflow-hidden border-y border-[#171717]/10 md:grid-cols-4">
        {imageStrip.map((image, index) => (
          <div
            key={image}
            className="relative h-[240px] min-w-0 overflow-hidden border-r border-[#171717]/10 bg-[#171717] md:h-[360px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute left-4 top-4 border border-white/20 bg-[#101010]/80 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
              0{index + 1}
            </div>
          </div>
        ))}
      </section>

      {/* ================= PARALLAX SECTION 1 ================= */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        subheading="Residential Work"
        heading="Built around the way people actually live."
      >
        <section className="mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 gap-8 px-2 pb-20 pt-12 sm:px-4 md:grid-cols-12 md:pb-24">
          <h2 className="col-span-1 min-w-0 break-words text-[clamp(2.1rem,9vw,3rem)] font-black uppercase leading-none tracking-[-0.06em] md:col-span-4 md:text-5xl">
            Homes need clean planning and proper finishing.
          </h2>

          <div className="col-span-1 min-w-0 md:col-span-8">
            <p className="mb-5 text-lg leading-8 text-[#5f5b52] md:text-2xl">
              From renovation work to structural improvements, the goal is to
              make the space more useful, more comfortable and more valuable
              without losing control of the details.
            </p>

            <p className="mb-8 text-base leading-8 text-[#5f5b52] md:text-lg">
              Drini Construction can support residential projects with clear
              planning, practical construction knowledge and attention to the
              final finish.
            </p>

            <Link
              href="/services#residential"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 bg-[#171717] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#b45309] sm:px-9 sm:tracking-[0.16em] md:w-fit"
            >
              View residential work
              <FiArrowUpRight className="shrink-0" />
            </Link>
          </div>
        </section>
      </TextParallaxContent>

      {/* ================= SERVICES ================= */}
      <section className="w-full overflow-hidden border-y border-[#171717]/10 bg-[#171717] px-4 py-20 text-white sm:px-5 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto mb-12 flex w-full max-w-7xl min-w-0 flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="min-w-0">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f59e0b] sm:tracking-[0.22em]">
              Services
            </p>

            <h2 className="mt-4 max-w-3xl break-words text-[clamp(2.3rem,10vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Construction support from first fix to finishing work.
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-[#f59e0b] hover:text-[#f59e0b] sm:tracking-[0.18em]"
          >
            View all services
            <FiArrowRight className="shrink-0 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 overflow-hidden border border-white/10 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="w-full overflow-hidden bg-[#f8f6ef] px-4 py-20 sm:px-5 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-7xl min-w-0">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b45309] sm:tracking-[0.22em]">
              How work is handled
            </p>

            <h2 className="mt-4 break-words text-[clamp(2.3rem,10vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Clear steps. Safe delivery. Proper finish.
            </h2>
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="min-w-0 border border-[#171717]/10 bg-[#efede7] p-6"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center bg-[#171717] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="break-words text-2xl font-black uppercase tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#5f5b52]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARALLAX SECTION 2 ================= */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
        subheading="Trades & Maintenance"
        heading="The smaller details hold the whole job together."
      >
        <section className="mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 gap-8 px-2 pb-20 pt-12 sm:px-4 md:grid-cols-12 md:pb-24">
          <h2 className="col-span-1 min-w-0 break-words text-[clamp(2.1rem,9vw,3rem)] font-black uppercase leading-none tracking-[-0.06em] md:col-span-4 md:text-5xl">
            Reliable support for the work that keeps properties moving.
          </h2>

          <div className="col-span-1 min-w-0 md:col-span-8">
            <p className="mb-5 text-lg leading-8 text-[#5f5b52] md:text-2xl">
              Plumbing, electrical, carpentry, roofing repairs and general
              upkeep all matter because they protect the bigger investment in a
              property.
            </p>

            <p className="mb-8 text-base leading-8 text-[#5f5b52] md:text-lg">
              From small practical repairs to wider trade support, Drini
              Construction can help keep projects organised and properties in
              good condition.
            </p>

            <Link
              href="/services#maintenance"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 bg-[#171717] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#b45309] sm:px-9 sm:tracking-[0.16em] md:w-fit"
            >
              View maintenance work
              <FiArrowUpRight className="shrink-0" />
            </Link>
          </div>
        </section>
      </TextParallaxContent>

      {/* ================= FINAL CTA ================= */}
      <section className="w-full overflow-hidden border-t border-white/10 bg-[#171717] px-4 py-20 text-white sm:px-5 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div className="min-w-0">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f59e0b] sm:tracking-[0.22em]">
              Start the conversation
            </p>

            <h2 className="mt-5 max-w-4xl break-words text-[clamp(2.6rem,12vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Tell Drini Construction what needs building, fixing or improving.
            </h2>
          </div>

          <div className="min-w-0 border border-white/10 bg-[#101010] p-6">
            <p className="text-base leading-8 text-white/65 md:text-lg">
              Whether the job is a renovation, repair, commercial project,
              external work or trade support, the next step is a simple
              conversation.
            </p>

            <div className="mt-8 grid min-w-0 gap-3">
              <Link
                href="/contact"
                className="group flex min-w-0 items-center justify-between gap-3 bg-[#f59e0b] px-5 py-5 text-sm font-black uppercase tracking-[0.12em] text-[#171717] transition hover:bg-white sm:tracking-[0.16em]"
              >
                <span>Request quote</span>
                <FiArrowRight className="shrink-0 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:07476401496"
                className="flex min-w-0 items-center justify-between gap-3 border border-white/15 px-5 py-5 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-white sm:tracking-[0.16em]"
              >
                <span>Call 07476 401496</span>
                <FiPhone className="shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type ServiceCardProps = {
  title: string;
  text: string;
  href: string;
  image: string;
};

function ServiceCard({ title, text, href, image }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative min-h-[360px] w-full min-w-0 overflow-hidden border-b border-white/10 p-5 md:min-h-[420px] md:border-r md:p-6"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-[#171717]/72" />

      <div className="relative z-10 flex h-full min-w-0 flex-col justify-between">
        <div className="flex min-w-0 items-center justify-between gap-4">
          <span className="border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#f59e0b] sm:tracking-[0.16em]">
            Service
          </span>

          <FiArrowRight className="shrink-0 text-white/40 transition group-hover:translate-x-1 group-hover:text-[#f59e0b]" />
        </div>

        <div className="min-w-0">
          <h3 className="break-words text-2xl font-black uppercase leading-none tracking-[-0.05em] sm:text-3xl">
            {title}
          </h3>

          <p className="mt-5 break-words text-sm leading-6 text-white/65">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
}

type TextParallaxContentProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
};

function TextParallaxContent({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) {
  return (
    <section className="w-full overflow-x-hidden bg-[#efede7]">
      <div
        className="w-full max-w-full overflow-hidden"
        style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING,
        }}
      >
        <div className="relative h-[130vh] w-full overflow-hidden md:h-[145vh]">
          <StickyImage imgUrl={imgUrl} />
          <OverlayCopy heading={heading} subheading={subheading} />
        </div>

        {children}
      </div>
    </section>
  );
}

type StickyImageProps = {
  imgUrl: string;
};

function StickyImage({ imgUrl }: StickyImageProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 w-full max-w-full origin-center overflow-hidden border border-[#171717]/10"
    >
      <motion.div
        className="absolute inset-0 bg-[#050505]/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
}

type OverlayCopyProps = {
  subheading: string;
  heading: string;
};

function OverlayCopy({ subheading, heading }: OverlayCopyProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const opacity = useTransform(scrollYProgress, [0.22, 0.5, 0.78], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
      className="absolute left-0 top-0 flex h-screen w-full max-w-full flex-col items-center justify-center overflow-hidden px-4 text-white"
    >
      <p className="mb-4 max-w-[92vw] border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.14em] text-[#f59e0b] sm:tracking-[0.2em] md:text-sm">
        {subheading}
      </p>

      <p className="max-w-[92vw] break-words text-center text-[clamp(2.7rem,12vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] md:max-w-5xl md:text-8xl">
        {heading}
      </p>
    </motion.div>
  );
}