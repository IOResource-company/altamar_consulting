import { Container, Eyebrow, SectionHeading } from "./ui";
import { siteConfig } from "@/content/site";

export function ContactCTA() {
  return (
    <section id="contact" className="border-t border-ink-line bg-ink">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: pitch + booking */}
          <div>
            <Eyebrow onDark>Contact</Eyebrow>
            <SectionHeading onDark>Let&apos;s scope it.</SectionHeading>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-on-ink-muted">
              A 30-minute call to talk through where AI would earn its place in
              your business. No deck, no pitch — a working conversation.
            </p>

            {/* Booking embed slot — drop your Calendly / Cal.com embed here. */}
            <div className="mt-8 rounded-2xl border border-dashed border-ink-line bg-ink-soft p-6">
              <p className="text-sm font-medium text-on-ink">
                Booking calendar
              </p>
              <p className="mt-1 text-sm text-on-ink-muted">
                Calendly / Cal.com embed slot — [CONFIRM booking link].
              </p>
              <a
                href={siteConfig.bookingUrl}
                className="mt-4 inline-flex text-sm font-medium text-brass-bright underline underline-offset-4"
              >
                Book a 30-min call
              </a>
            </div>

            <p className="mt-8 text-sm text-on-ink-muted">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-on-ink underline decoration-brass-bright underline-offset-4"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>

          {/* Right: simple contact form */}
          <div className="rounded-2xl border border-ink-line bg-ink-soft p-8">
            <form action={siteConfig.formEndpoint} method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-on-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-lg border border-ink-line bg-ink px-4 py-3 text-on-ink placeholder:text-on-ink-muted/60 focus:border-brass"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-on-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-lg border border-ink-line bg-ink px-4 py-3 text-on-ink placeholder:text-on-ink-muted/60 focus:border-brass"
                  placeholder="you@company.ie"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-on-ink">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="mt-2 w-full rounded-lg border border-ink-line bg-ink px-4 py-3 text-on-ink placeholder:text-on-ink-muted/60 focus:border-brass"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-on-ink">
                  What would you like to work on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-ink-line bg-ink px-4 py-3 text-on-ink placeholder:text-on-ink-muted/60 focus:border-brass"
                  placeholder="A line or two on where AI might help."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-brass px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
              >
                Send
              </button>
              <p className="text-xs text-on-ink-muted">
                Goes straight to the partners. We reply within one working day.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
