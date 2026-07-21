import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiHelpCircle,
  FiHome,
  FiMail,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiShield,
  FiTool,
} from "react-icons/fi";

const contactMethods = [
  {
    title: "Call Drini Construction",
    detail: "07476 401496",
    href: "tel:07476401496",
    text: "Best for quick project questions, urgent repair enquiries or discussing what needs doing.",
    Icon: FiPhone,
    cta: "Call now",
  },
  {
    title: "Send an email",
    detail: "info@driniconstruction.co.uk",
    href: "mailto:info@driniconstruction.co.uk",
    text: "Best for sending photos, addresses, project details or a written description of the work.",
    Icon: FiMail,
    cta: "Email now",
  },
  {
    title: "Location",
    detail: "60 Fulwich Road, Dartford, DA1 1UT",
    href: "https://www.google.com/maps/search/?api=1&query=60%20Fulwich%20Road%20Dartford%20DA1%201UT",
    text: "Based in Dartford and positioned to support construction, renovation and maintenance enquiries.",
    Icon: FiMapPin,
    cta: "View location",
  },
];

const quickInfo = [
  {
    title: "Residential Work",
    text: "Renovations, home improvements, internal alterations and general building support.",
    Icon: FiHome,
  },
  {
    title: "Commercial Work",
    text: "Construction and improvement work for functional business and commercial spaces.",
    Icon: FiBriefcase,
  },
  {
    title: "Trade Services",
    text: "Plumbing, electrical, carpentry, maintenance, repair and finishing support.",
    Icon: FiTool,
  },
  {
    title: "Safe Delivery",
    text: "A practical working approach built around clear planning, communication and quality.",
    Icon: FiShield,
  },
];

const faqs = [
  {
    question: "What type of work does Drini Construction handle?",
    answer:
      "Drini Construction covers residential building and renovations, commercial construction, specialised trade services, property maintenance, roofing repairs, landscaping and external works.",
  },
  {
    question: "What should I include when I get in touch?",
    answer:
      "Include the property location, the type of work needed, a short description of the project, your preferred timescale and any useful photos. That makes it easier to understand the job before a proper conversation.",
  },
  {
    question: "Can I send photos before speaking to someone?",
    answer:
      "Yes. Email is usually the best option for sending photos, measurements, drawings, notes or anything else that helps explain the work.",
  },
  {
    question: "Do they handle both small repairs and larger projects?",
    answer:
      "Yes. The service range covers larger residential and commercial work as well as practical maintenance, repairs, roofing support and external property improvements.",
  },
  {
    question: "What are the working hours?",
    answer:
      "The listed opening hours are Monday to Friday, 8:00am to 6:00pm. Saturday and Sunday are listed as closed.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#efede7] text-[#171717]">
      {/* ================= HERO ================= */}
      <section className="border-b border-[#171717]/10 bg-[#171717] px-5 py-8 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="grid gap-5">
            <div className="border border-white/10 bg-[#101010] p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f59e0b]">
                Contact Drini Construction
              </p>

              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] md:text-7xl">
                Talk through the work.
              </h1>

              <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
                Whether the job is a renovation, repair, commercial project,
                trade service or external work, the next step is a direct
                conversation.
              </p>

              <div className="mt-8 grid gap-3">
                <a
                  href="tel:07476401496"
                  className="group flex items-center justify-between bg-[#f59e0b] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#171717] transition hover:bg-white"
                >
                  Call 07476 401496
                  <FiPhone />
                </a>

                <a
                  href="mailto:info@driniconstruction.co.uk"
                  className="group flex items-center justify-between border border-white/15 px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-white"
                >
                  Send email
                  <FiMail />
                </a>
              </div>
            </div>

            <div className="border border-white/10 bg-[#101010] p-6">
              <FiClock className="mb-5 text-3xl text-[#f59e0b]" />

              <p className="text-3xl font-black uppercase tracking-[-0.05em]">
                Opening Hours
              </p>

              <div className="mt-5 grid gap-3 text-sm text-white/65">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Monday-Friday</span>
                  <span>8:00am – 6:00pm</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[680px] overflow-hidden border border-white/10 bg-[#0d0d0d]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute left-5 top-5 border border-white/15 bg-[#101010]/90 px-4 py-3">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                Building · Renovation · Maintenance
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 grid border-t border-white/10 bg-[#101010]/90 md:grid-cols-3">
              <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                  Email
                </p>
                <p className="mt-3 break-words text-sm font-semibold text-white/70">
                  info@driniconstruction.co.uk
                </p>
              </div>

              <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                  Phone
                </p>
                <p className="mt-3 text-sm font-semibold text-white/70">
                  07476 401496
                </p>
              </div>

              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                  Area
                </p>
                <p className="mt-3 text-sm font-semibold text-white/70">
                  Dartford & surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT METHODS ================= */}
      <section className="border-b border-[#171717]/10 bg-[#f8f6ef] px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
              Direct contact
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              No long forms. Just the details you need.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.Icon;

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.title === "Location" ? "_blank" : undefined}
                  rel={
                    method.title === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-[360px] flex-col justify-between border border-[#171717]/10 bg-[#efede7] p-6 transition hover:border-[#b45309] hover:bg-[#f8f6ef]"
                >
                  <div>
                    <Icon className="mb-8 text-4xl text-[#b45309]" />

                    <p className="text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                      {method.title}
                    </p>

                    <p className="mt-5 break-words text-lg font-bold leading-7 text-[#171717]">
                      {method.detail}
                    </p>

                    <p className="mt-5 text-sm leading-6 text-[#5f5b52]">
                      {method.text}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#171717]/10 pt-5 text-xs font-black uppercase tracking-[0.18em] text-[#b45309]">
                    {method.cta}
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT TO SEND ================= */}
      <section className="bg-[#efede7] px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden border border-[#171717]/10 bg-[#171717]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-[#101010]/90 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                Project details
              </p>

              <p className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                A few clear details can make the first conversation much easier.
              </p>
            </div>
          </div>

          <div className="border border-[#171717]/10 bg-[#f8f6ef] p-6 md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
              Before getting in touch
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Useful things to include in your message.
            </h2>

            <div className="mt-8 grid gap-3">
              {[
                "The property address or area",
                "The type of work needed",
                "A rough timescale",
                "Any photos or measurements",
                "Whether the work is residential or commercial",
                "The best phone number to call back on",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-[#171717]/10 bg-[#efede7] p-4"
                >
                  <FiCheckCircle className="shrink-0 text-[#b45309]" />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:info@driniconstruction.co.uk"
                className="group flex items-center justify-between bg-[#171717] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b45309]"
              >
                Email details
                <FiMail />
              </a>

              <a
                href="tel:07476401496"
                className="flex items-center justify-between border border-[#171717]/10 bg-[#efede7] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#171717] transition hover:border-[#b45309] hover:text-[#b45309]"
              >
                Call now
                <FiPhone />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK INFO ================= */}
      <section className="border-y border-[#171717]/10 bg-[#171717] px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59e0b]">
                What you can ask about
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Contact for building, repairs, trade work and external projects.
              </h2>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
            >
              View services
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {quickInfo.map((item) => {
              const Icon = item.Icon;

              return (
                <div key={item.title} className="border border-white/10 bg-[#101010] p-6">
                  <Icon className="mb-7 text-3xl text-[#f59e0b]" />

                  <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQS ================= */}
      <section className="bg-[#f8f6ef] px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
              FAQs
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Common questions before getting in touch.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5f5b52]">
              These answers help customers understand what to ask, what to send
              and whether the work is the right fit before calling or emailing.
            </p>

            <div className="mt-8 border border-[#171717]/10 bg-[#efede7] p-6">
              <FiHelpCircle className="mb-5 text-3xl text-[#b45309]" />

              <p className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                Still unsure?
              </p>

              <p className="mt-4 text-sm leading-6 text-[#5f5b52]">
                A quick call or email is the easiest way to explain the job and
                find out what the next step should be.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border border-[#171717]/10 bg-[#efede7]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5">
                  <span className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#171717] text-xs font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg font-black uppercase leading-6 tracking-[-0.04em]">
                      {faq.question}
                    </span>
                  </span>

                  <FiArrowRight className="shrink-0 text-[#b45309] transition group-open:rotate-90" />
                </summary>

                <div className="border-t border-[#171717]/10 px-5 pb-5 pt-4">
                  <p className="text-base leading-8 text-[#5f5b52]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAP STYLE CTA ================= */}
      <section className="bg-[#efede7] px-5 pb-24 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[#171717]/10 bg-[#f8f6ef] p-6 md:p-9">
            <FiNavigation className="mb-6 text-4xl text-[#b45309]" />

            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b45309]">
              Find Drini Construction
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Based in Dartford.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5f5b52]">
              Drini Construction is listed at 60 Fulwich Road, Dartford, DA1
              1UT, with services covering construction, renovation, maintenance
              and external works.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=60%20Fulwich%20Road%20Dartford%20DA1%201UT"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#171717] px-6 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b45309] md:w-fit"
            >
              Open map
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-[#171717]/10 bg-[#171717]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-[#101010]/90 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59e0b]">
                Direct enquiry
              </p>

              <p className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                Call, email or send the project details directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-white/10 bg-[#171717] px-5 py-24 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59e0b]">
              Ready to speak?
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Get in touch about your construction project.
            </h2>
          </div>

          <div className="border border-white/10 bg-[#101010] p-6">
            <p className="text-lg leading-8 text-white/65">
              No form needed. Call directly or send an email with the project
              details, photos and location.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href="tel:07476401496"
                className="group flex items-center justify-between bg-[#f59e0b] px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#171717] transition hover:bg-white"
              >
                Call 07476 401496
                <FiPhone />
              </a>

              <a
                href="mailto:info@driniconstruction.co.uk"
                className="flex items-center justify-between border border-white/15 px-5 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-white"
              >
                Email Drini Construction
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}