import { Container, Eyebrow, SectionHeading, Button } from "./ui";
import { methodSteps, methodPlaybookUrl } from "@/content/site";

export function MethodStrip() {
  return (
    <section id="method" className="border-t border-line bg-paper">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Eyebrow>Our method</Eyebrow>
            <SectionHeading>10 Steps to AI Mastery</SectionHeading>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              A documented, repeatable path from first prompt to agentic
              workflows — not a one-off workshop. Run live in our own business
              and in talks.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button href={methodPlaybookUrl} variant="secondary">
              See the full playbook
            </Button>
          </div>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-5">
          {methodSteps.map((step) => (
            <li
              key={step.step}
              className="flex min-h-28 flex-col justify-between bg-paper-card p-5"
            >
              <span className="font-display text-2xl font-medium text-brass">
                {String(step.step).padStart(2, "0")}
              </span>
              <span className="mt-3 text-sm leading-snug text-text-muted">
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
