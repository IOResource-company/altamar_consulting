import { Container, Button } from "./ui";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <Container className="pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-brass-ink">
            <span className="h-px w-8 bg-brass" aria-hidden />
            {siteConfig.hook}
          </p>

          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl">
            AI that actually works in your business.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
            We work alongside owner-led SMEs in Ireland and the UK — on strategy
            and on the build — to get AI live and earning. Not stuck in a slide
            deck.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.bookingUrl}>Book a 30-min call</Button>
            <Button href="#approach" variant="secondary">
              See how we work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
