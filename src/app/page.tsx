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
    text: "Practical commercial construction services focused on functional spaces, brand presentation and long-term use.",
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
    <main className="bg-[#efede7] text-[#171717]">
      {/* ================= HERO ================= */}
      <section className="border-b border-[#171717]/10 bg-[#171717] text-white">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl gap-5 px-5 py-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="flex flex-col justify-between border border-white/10 bg-[#101010] p-6 md:p-9">
            <div>
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="border border-[#f59e0b] bg-[#f59e0b] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#171717]">
                  Construction
                </span>
                <span className="border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/60">
                  Renovation
                </span>
                <span className="border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/60">
                  Maintenance
                </span>
              </div>

              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] md:text-7xl lg:text-7xl">
                Construction work built around quality, safety and trust.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                Drini Construction Ltd delivers residential building,
                renovations, commercial construction, specialised trade
                services, property maintenance, repairs and external works.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="group flex items-center justify-between border border-[#f59e0b] bg-[#f59e0b] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#171717] transition hover:border-white hover:bg-white"
              >
                Request quote
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:07476401496"
                className="group flex items-center justify-between border border-white/15 px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-[#171717]"
              >
                Call now
                <FiPhone />
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-[#0d0d0d] lg:min-h-[560px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute left-5 top-5 border border-white/15 bg-[#101010]/90 px-4 py-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                  Professionals on demand
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-[#101010]/90 p-5">
                <p className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                  Building, renovation and maintenance services for practical
                  spaces.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="border border-white/10 bg-[#262626] p-6">
                <FiClock className="mb-5 text-2xl text-[#f59e0b]" />
                <p className="text-3xl font-black uppercase tracking-[-0.05em]">
                  Mon–Fri
                </p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Available 8:00am – 6:00pm for enquiries.
                </p>
              </div>

              <div className="border border-white/10 bg-[#262626] p-6">
                <FiMapPin className="mb-5 text-2xl text-[#f59e0b]" />
                <p className="text-3xl font-black uppercase tracking-[-0.05em]">
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
      <section className="border-b border-[#171717]/10 bg-[#f8f6ef]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#171717]/10 px-5 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8 lg:px-10">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="py-8 md:px-7">
                <Icon className="mb-5 text-2xl text-[#b45309]" />
                <p className="text-2xl font-black uppercase tracking-[-0.04em]">
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
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.85fr_1.15fr] md:px-8 lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
            Drini Construction Ltd
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
            Skilled construction professionals with a practical approach.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#4f4b43]">
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

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 border border-[#171717]/10 bg-[#f8f6ef] p-4"
              >
                <FiCheckCircle className="shrink-0 text-[#b45309]" />
                <span className="text-sm font-bold">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE STRIP ================= */}
      <section className="grid grid-cols-2 border-y border-[#171717]/10 md:grid-cols-4">
        {imageStrip.map((image, index) => (
          <div
            key={image}
            className="relative h-[260px] overflow-hidden border-r border-[#171717]/10 bg-[#171717] md:h-[360px]"
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
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-4xl font-black uppercase leading-none tracking-[-0.06em] md:col-span-4 md:text-5xl">
            Homes need clean planning and proper finishing.
          </h2>

          <div className="col-span-1 md:col-span-8">
            <p className="mb-5 text-xl leading-8 text-[#5f5b52] md:text-2xl">
              From renovation work to structural improvements, the goal is to
              make the space more useful, more comfortable and more valuable
              without losing control of the details.
            </p>

            <p className="mb-8 text-lg leading-8 text-[#5f5b52]">
              This is where a stronger website can sell the business properly:
              showing the type of work, the process, the finish and the trust
              behind the team before a customer even makes contact.
            </p>

            <Link
              href="/services#residential"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#171717] px-9 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b45309] md:w-fit"
            >
              View residential work
              <FiArrowUpRight />
            </Link>
          </div>
        </section>
      </TextParallaxContent>

      {/* ================= SERVICES ================= */}
      <section className="border-y border-[#171717]/10 bg-[#171717] px-5 py-24 text-white md:px-8 lg:px-10">
        <div className="mx-auto mb-12 flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59e0b]">
              Services
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Construction support from first fix to finishing work.
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
          >
            View all services
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 border border-white/10 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#f8f6ef] px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
              How work is handled
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Clear steps. Safe delivery. Proper finish.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#171717]/10 bg-[#efede7] p-6"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center bg-[#171717] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-black uppercase tracking-[-0.05em]">
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
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-4xl font-black uppercase leading-none tracking-[-0.06em] md:col-span-4 md:text-5xl">
            Reliable support for the work that keeps properties moving.
          </h2>

          <div className="col-span-1 md:col-span-8">
            <p className="mb-5 text-xl leading-8 text-[#5f5b52] md:text-2xl">
              Plumbing, electrical, carpentry, roofing repairs and general
              upkeep all matter because they protect the bigger investment in a
              property.
            </p>

            <p className="mb-8 text-lg leading-8 text-[#5f5b52]">
              A stronger digital presence helps customers understand that Drini
              Construction is not limited to one type of job. It presents the
              company as a practical, multi-service construction partner.
            </p>

            <Link
              href="/services#maintenance"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#171717] px-9 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b45309] md:w-fit"
            >
              View maintenance work
              <FiArrowUpRight />
            </Link>
          </div>
        </section>
      </TextParallaxContent>

      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-white/10 bg-[#171717] px-5 py-24 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59e0b]">
              Start the conversation
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Tell Drini Construction what needs building, fixing or improving.
            </h2>
          </div>

          <div className="border border-white/10 bg-[#101010] p-6">
            <p className="text-lg leading-8 text-white/65">
              Whether the job is a renovation, repair, commercial project,
              external work or trade support, the next step is a simple
              conversation.
            </p>

            <div className="mt-8 grid gap-3">
              <Link
                href="/contact"
                className="group flex items-center justify-between bg-[#f59e0b] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#171717] transition hover:bg-white"
              >
                Request quote
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:07476401496"
                className="flex items-center justify-between border border-white/15 px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-white"
              >
                Call 07476 401496
                <FiPhone />
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
      className="group relative min-h-[420px] overflow-hidden border-b border-white/10 p-6 md:border-r"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-[#171717]/72" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#f59e0b]">
            Service
          </span>
          <FiArrowRight className="text-white/40 transition group-hover:translate-x-1 group-hover:text-[#f59e0b]" />
        </div>

        <div>
          <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.06em]">
            {title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-white/65">{text}</p>
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
    <section className="bg-[#efede7]">
      <div
        style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING,
        }}
      >
        <div className="relative h-[145vh]">
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
      className="sticky z-0 overflow-hidden border border-[#171717]/10"
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

  const y = useTransform(scrollYProgress, [0, 1], [240, -240]);
  const opacity = useTransform(scrollYProgress, [0.22, 0.5, 0.78], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-5 text-white"
    >
      <p className="mb-4 border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-[#f59e0b] md:text-sm">
        {subheading}
      </p>
      <p className="max-w-5xl text-center text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] md:text-8xl">
        {heading}
      </p>
    </motion.div>
  );
}