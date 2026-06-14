import { Container, Eyebrow } from "./ui";

export function Problem() {
  return (
    <section id="why-us" className="border-t border-line bg-paper-dim">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Why us</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-text sm:text-4xl">
              In an SME, AI fails when it&apos;s handed off.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-text-muted md:col-span-7 md:col-start-6">
            <p>
              The owner has the cross-functional view, the authority to redesign
              how work gets done, and the most to gain. Delegate AI to a
              committee and it stalls.
            </p>
            <p>
              So we work with the people who run the business — on the strategy
              and on the build. Not a deck and a handshake: first use cases live,
              and the team believing.
            </p>
            <p className="text-text">
              We&apos;re operators, not theorists. Stephen runs a ~30-person Irish
              SME and has deployed AI across sales, finance, operations and
              governance — and written down the playbook. Simon built agentic
              systems at scale at Meta. Behind them, a vetted network of senior
              practitioners.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
