import { Container, Eyebrow, SectionHeading } from "./ui";
import { engagementLadder } from "@/content/site";

export function EngagementLadder() {
  return (
    <section id="approach" className="border-t border-ink-line bg-ink">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow onDark>How we work</Eyebrow>
          <SectionHeading onDark>The engagement ladder</SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-on-ink-muted">
            Sequential, but you can enter at any rung — wherever the business is.
          </p>
        </div>

        <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-ink-line">
          {engagementLadder.map((rung) => (
            <li
              key={rung.step}
              className="grid gap-4 bg-ink-soft p-6 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:p-8"
            >
              <div className="flex items-baseline gap-4 sm:col-span-4">
                <span className="font-display text-2xl font-medium text-brass-bright">
                  {String(rung.step).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-medium text-on-ink">
                  {rung.title}
                </h3>
              </div>
              <div className="sm:col-span-8">
                {rung.duration && (
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-brass-bright">
                    {rung.duration}
                  </p>
                )}
                <p className="leading-relaxed text-on-ink-muted">
                  {rung.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
