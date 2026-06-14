import { Container, Eyebrow, SectionHeading } from "./ui";
import { services } from "@/content/site";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-t border-line bg-paper">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <SectionHeading>Two lanes. Strategy and build.</SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Broader than strategy-only — we set the direction and build the
            systems that make it real.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.pillar}
              className="flex flex-col rounded-2xl border border-line bg-paper-card p-8 sm:p-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-brass-ink">
                {service.lead}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-text">
                {service.pillar}
              </h3>
              <p className="mt-4 leading-relaxed text-text-muted">
                {service.summary}
              </p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-text">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
