import { Container, Eyebrow, SectionHeading } from "./ui";
import { projects } from "@/content/site";

export function SelectedWork() {
  const live = projects.filter((p) => !p.draft);

  return (
    <section id="work" className="border-t border-line bg-paper-dim">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Selected work</Eyebrow>
          <SectionHeading>Outcomes, not slideware.</SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Anonymised, drawn from real engagements and our own documented IP.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {live.map((project) => (
            <article
              key={project.outcome}
              className="flex flex-col rounded-2xl border border-line bg-paper-card p-8"
            >
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-brass-ink">
                <span>{project.sector}</span>
                {project.flagship && (
                  <span className="rounded-full bg-brass/15 px-2.5 py-0.5 text-brass-ink">
                    Flagship
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-text">
                {project.outcome}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                <span className="font-medium text-text">Challenge. </span>
                {project.challenge}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                <span className="font-medium text-text">What we did. </span>
                {project.whatWeDid}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto text-xs text-text-muted">
                  {project.descriptor} · {project.lead}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
