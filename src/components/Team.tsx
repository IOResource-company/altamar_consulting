import { Container, Eyebrow, SectionHeading } from "./ui";
import { team } from "@/content/site";
import type { TeamMember } from "@/content/types";

function initials(name: string) {
  return name
    .split(" ")
    .filter((p) => /[A-Za-z]/.test(p[0] ?? ""))
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function Avatar({ name, large = false }: { name: string; large?: boolean }) {
  // Photo slot — replace with <Image> once verified photos are supplied.
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-ink font-display font-medium text-brass-bright ${
        large ? "h-16 w-16 text-xl" : "h-12 w-12 text-base"
      }`}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}

function PartnerCard({ member }: { member: TeamMember }) {
  return (
    <article className="rounded-2xl border border-line bg-paper-card p-8">
      <div className="flex items-center gap-4">
        <Avatar name={member.name} large />
        <div>
          <h3 className="font-display text-xl font-medium text-text">
            {member.name}
          </h3>
          <p className="text-sm text-brass-ink">{member.role}</p>
        </div>
      </div>
      <p className="mt-5 leading-relaxed text-text-muted">{member.bio}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm font-medium text-text underline decoration-brass underline-offset-4 hover:text-brass-ink"
        >
          LinkedIn
        </a>
      )}
    </article>
  );
}

export function Team() {
  const partners = team
    .filter((m) => m.published && m.kind === "partner")
    .sort((a, b) => a.order - b.order);
  const associates = team
    .filter((m) => m.published && m.kind === "associate")
    .sort((a, b) => a.order - b.order);

  return (
    <section id="team" className="border-t border-line bg-paper">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Team &amp; network</Eyebrow>
          <SectionHeading>Operators, plus senior firepower.</SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Two operating partners, backed by a vetted network of senior
            practitioners from Meta and beyond.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {partners.map((member) => (
            <PartnerCard key={member.name} member={member} />
          ))}
        </div>

        {associates.length > 0 && (
          <>
            <h3 className="mt-16 text-xs font-medium uppercase tracking-[0.16em] text-brass-ink">
              The network
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {associates.map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl border border-line bg-paper-card p-6"
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={member.name} />
                    <div>
                      <h4 className="font-medium text-text">{member.name}</h4>
                      {member.affiliation && (
                        <p className="text-xs text-text-muted">
                          {member.affiliation}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted">
                    {member.bio}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-medium text-text underline decoration-brass underline-offset-4 hover:text-brass-ink"
                    >
                      LinkedIn
                    </a>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
