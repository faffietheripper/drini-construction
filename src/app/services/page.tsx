"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiGrid,
  FiHome,
  FiLayers,
  FiPhone,
  FiShield,
  FiTool,
  FiTruck,
} from "react-icons/fi";

const IMG_PADDING = 12;

const services = [
  {
    id: "residential",
    kicker: "Residential",
    title: "Residential Building & Renovations",
    description:
      "Bespoke construction and renovation services for homeowners who want their property improved, modernised or rebuilt with care.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    Icon: FiHome,
    includes: [
      "Home renovations",
      "Internal alterations",
      "Room improvements",
      "Structural upgrades",
      "Finishing works",
      "General residential building",
    ],
    bestFor:
      "Homeowners looking to improve the value, comfort and usability of their property.",
  },
  {
    id: "commercial",
    kicker: "Commercial",
    title: "Commercial Construction",
    description:
      "Construction support for practical business spaces, designed around function, presentation, safety and long-term use.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    Icon: FiBriefcase,
    includes: [
      "Commercial fit-out support",
      "Workplace improvements",
      "Business space upgrades",
      "Internal construction works",
      "Practical layout improvements",
      "Finishing and repair works",
    ],
    bestFor:
      "Businesses that need their space to look professional, work properly and support daily operations.",
  },
  {
    id: "trades",
    kicker: "Specialised trades",
    title: "Plumbing, Electrical & Carpentry",
    description:
      "Skilled trade support across key areas of construction, helping keep projects organised and properly finished.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    Icon: FiTool,
    includes: [
      "Plumbing support",
      "Electrical work",
      "Carpentry",
      "First fix support",
      "Second fix support",
      "Detail and finishing work",
    ],
    bestFor:
      "Projects that need reliable trades working together instead of disconnected contractors.",
  },
  {
    id: "maintenance",
    kicker: "Maintenance",
    title: "Property Maintenance & Repairs",
    description:
      "Practical repair and upkeep services that help keep properties safe, functional and in good condition.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    Icon: FiShield,
    includes: [
      "General property repairs",
      "Roofing repairs",
      "Routine upkeep",
      "Damage repair",
      "Practical maintenance",
      "Small construction fixes",
    ],
    bestFor:
      "Property owners, landlords and businesses that need reliable repair work without unnecessary complications.",
  },
  {
    id: "external",
    kicker: "External works",
    title: "Landscaping & External Works",
    description:
      "Outdoor improvements and external construction work that help improve access, appearance and usable space around a property.",
    image:
      "https://images.unsplash.com/photo-1590375466428-8dc638f5b32f?q=80&w=2070&auto=format&fit=crop",
    Icon: FiLayers,
    includes: [
      "External improvements",
      "Landscaping support",
      "Outdoor preparation",
      "Kerb appeal improvements",
      "Access improvements",
      "External finishing work",
    ],
    bestFor:
      "Customers who want the outside of their property to look cleaner, function better and feel more complete.",
  },
];

const serviceNav = [
  {
    label: "Residential",
    href: "#residential",
  },
  {
    label: "Commercial",
    href: "#commercial",
  },
  {
    label: "Trades",
    href: "#trades",
  },
  {
    label: "Maintenance",
    href: "#maintenance",
  },
  {
    label: "External",
    href: "#external",
  },
];

const aboutValues = [
  {
    title: "Safety",
    text: "Work is approached with safety in mind, from planning through to delivery.",
    Icon: FiShield,
  },
  {
    title: "Transparency",
    text: "Clear communication helps customers understand what is happening and why.",
    Icon: FiGrid,
  },
  {
    title: "Collaboration",
    text: "Different construction disciplines work better when the job is joined up properly.",
    Icon: FiTruck,
  },
  {
    title: "Quality",
    text: "The finish matters, whether the job is structural, practical, internal or external.",
    Icon: FiCheckCircle,
  },
];

const process = [
  {
    title: "Understand the job",
    text: "Every project starts by understanding the property, the customer’s needs and the type of work required.",
  },
  {
    title: "Plan the approach",
    text: "The right sequence, trades, materials and practical steps are considered before work begins.",
  },
  {
    title: "Carry out the work",
    text: "The job is delivered with a focus on safety, communication and keeping the site organised.",
  },
  {
    title: "Complete properly",
    text: "The final stage focuses on finishing, checking details and leaving the space ready for use.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#efede7] text-[#171717]">
      {/* ================= HERO ================= */}
      <section className="border-b border-[#171717]/10 bg-[#171717] px-5 py-8 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border border-white/10 bg-[#101010] px-5 py-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f59e0b]">
              Services Overview
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="border border-white/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
                Residential
              </span>
              <span className="border border-white/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
                Commercial
              </span>
              <span className="border border-white/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
                Maintenance
              </span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[620px] overflow-hidden border border-white/10 bg-[#0d0d0d]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute left-5 top-5 border border-white/15 bg-[#101010]/90 px-4 py-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                  Building · Renovation · Repair
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#101010]/90 p-6 md:p-9">
                <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] md:text-7xl">
                  Services that keep building projects moving.
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                  Drini Construction covers residential building, renovations,
                  commercial work, trade services, property maintenance, repairs
                  and external works.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="border border-white/10 bg-[#101010] p-6">
                <FiHome className="mb-6 text-3xl text-[#f59e0b]" />
                <p className="text-3xl font-black uppercase tracking-[-0.05em]">
                  Residential
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Renovations, home improvements and general building support.
                </p>
              </div>

              <div className="border border-white/10 bg-[#101010] p-6">
                <FiBriefcase className="mb-6 text-3xl text-[#f59e0b]" />
                <p className="text-3xl font-black uppercase tracking-[-0.05em]">
                  Commercial
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Construction and improvement work for practical business
                  spaces.
                </p>
              </div>

              <div className="border border-white/10 bg-[#101010] p-6">
                <FiTool className="mb-6 text-3xl text-[#f59e0b]" />
                <p className="text-3xl font-black uppercase tracking-[-0.05em]">
                  Trades
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Plumbing, electrical, carpentry, repair and maintenance
                  support.
                </p>
              </div>

              <div className="border border-[#f59e0b] bg-[#f59e0b] p-6 text-[#171717]">
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  Need a quote?
                </p>

                <p className="mt-4 text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                  Talk through the work and get the right service lined up.
                </p>

                <div className="mt-6 grid gap-3">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between bg-[#171717] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#171717]"
                  >
                    Request quote
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="tel:07476401496"
                    className="flex items-center justify-between border border-[#171717]/20 px-5 py-4 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-white"
                  >
                    Call now
                    <FiPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE NAV ================= */}
      <section className="border-b border-[#171717]/10 bg-[#f8f6ef]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#171717]/10 px-5 md:grid-cols-5 md:divide-y-0 md:px-8 lg:px-10">
          {serviceNav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex min-h-[120px] flex-col justify-between py-6 pr-5 transition hover:bg-[#efede7] md:px-5"
            >
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#b45309]">
                0{index + 1}
              </span>

              <span className="mt-5 flex items-center justify-between text-lg font-black uppercase tracking-[-0.04em]">
                {item.label}
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.85fr_1.15fr] md:px-8 lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
            What Drini Construction covers
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
            Practical building services with one joined-up approach.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#4f4b43]">
          <p>
            A strong construction company needs to show more than a list of
            services. Customers need to understand what type of work is covered,
            how the team approaches a job, and why they can trust the company to
            deliver it properly.
          </p>

          <p>
            This page positions Drini Construction as a multi-service
            construction partner, covering the major work customers usually
            need: home improvements, commercial spaces, trade support, repairs
            and external finishing.
          </p>

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {[
              "Residential and commercial work",
              "Trade services under one roof",
              "Maintenance and repair capability",
              "External property improvements",
            ].map((point) => (
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

      {/* ================= PARALLAX SECTION ================= */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        subheading="Residential & Commercial"
        heading="Spaces built to work better."
      >
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-4xl font-black uppercase leading-none tracking-[-0.06em] md:col-span-4 md:text-5xl">
            From living spaces to business spaces.
          </h2>

          <div className="col-span-1 md:col-span-8">
            <p className="mb-5 text-xl leading-8 text-[#5f5b52] md:text-2xl">
              Whether the job is inside a home or a business premises, customers
              want the same thing: clear planning, reliable workmanship and a
              finished space that works the way it should.
            </p>

            <p className="mb-8 text-lg leading-8 text-[#5f5b52]">
              This services page gives each area of work its own space, making
              the business easier to understand and easier to enquire with.
            </p>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#171717] px-9 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b45309] md:w-fit"
            >
              Discuss a project
              <FiArrowUpRight />
            </Link>
          </div>
        </section>
      </TextParallaxContent>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="border-y border-[#171717]/10 bg-[#171717] px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59e0b]">
            Service breakdown
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-5xl">
            A clearer way to present every part of the business.
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5">
          {services.map((service, index) => (
            <ServiceDetail key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-[#efede7] px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-[#171717]/10 bg-[#f8f6ef] p-6 md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
              About Drini Construction
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              A team built around skill, safety and honest delivery.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-[#4f4b43]">
              <p>
                Drini Construction can be presented as a team of skilled
                professionals from different construction disciplines, bringing
                practical expertise and creative problem-solving to each
                project.
              </p>

              <p>
                The business is positioned around high-quality construction,
                safety, sustainability and client satisfaction, with a working
                style built on integrity, transparency and collaboration.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="group flex items-center justify-between bg-[#171717] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b45309]"
              >
                Start enquiry
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:07476401496"
                className="flex items-center justify-between border border-[#171717]/10 bg-[#efede7] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#171717] transition hover:border-[#b45309] hover:text-[#b45309]"
              >
                Call now
                <FiPhone />
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[380px] overflow-hidden border border-[#171717]/10 bg-[#171717]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-[#101010]/90 p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                  Construction disciplines
                </p>

                <p className="mt-3 text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                  Bringing different skills together for better project
                  delivery.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {aboutValues.map((value) => {
                const Icon = value.Icon;

                return (
                  <div
                    key={value.title}
                    className="border border-[#171717]/10 bg-[#f8f6ef] p-6"
                  >
                    <Icon className="mb-5 text-2xl text-[#b45309]" />

                    <h3 className="text-2xl font-black uppercase tracking-[-0.05em]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#5f5b52]">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#f8f6ef] px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
              Working process
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Simple, clear and built around delivery.
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

      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-white/10 bg-[#171717] px-5 py-24 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59e0b]">
              Need construction support?
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Talk through the work and get the right service lined up.
            </h2>
          </div>

          <div className="border border-white/10 bg-[#101010] p-6">
            <p className="text-lg leading-8 text-white/65">
              Whether it is residential, commercial, trade, repair or external
              work, the next step is a clear conversation about the job.
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

type Service = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
  Icon: React.ElementType;
  includes: string[];
  bestFor: string;
};

type ServiceDetailProps = {
  service: Service;
  index: number;
};

function ServiceDetail({ service, index }: ServiceDetailProps) {
  const Icon = service.Icon;

  return (
    <article
      id={service.id}
      className="grid overflow-hidden border border-white/10 bg-[#101010] lg:grid-cols-[0.78fr_1.22fr]"
    >
      <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-5 top-5 flex items-center gap-3 border border-white/15 bg-[#101010]/90 px-4 py-3">
          <Icon className="text-[#f59e0b]" />

          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white">
            {String(index + 1).padStart(2, "0")} / {service.kicker}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f59e0b]">
          {service.kicker}
        </p>

        <h3 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-5xl">
          {service.title}
        </h3>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/65">
          {service.description}
        </p>

        <div className="mt-6 border border-white/10 bg-[#171717] p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f59e0b]">
            Best for
          </p>

          <p className="mt-2 text-sm leading-6 text-white/70">
            {service.bestFor}
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.includes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border border-white/10 bg-[#171717] p-3"
            >
              <FiCheckCircle className="shrink-0 text-sm text-[#f59e0b]" />

              <span className="text-xs font-semibold leading-5 text-white/75">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 border border-[#f59e0b] bg-[#f59e0b] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#171717] transition hover:border-white hover:bg-white md:w-fit"
          >
            Enquire about this service
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
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