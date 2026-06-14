import Link from "next/link";
import { Container } from "./ui";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = 2026; // Build year. Update or wire to a build-time value as needed.

  return (
    <footer className="border-t border-ink-line bg-ink">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-on-ink">
              Altamar Consulting
            </p>
            <p className="mt-2 max-w-xs text-sm text-on-ink-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-brass-bright">
                Partners
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={siteConfig.linkedin.stephen}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-ink-muted hover:text-on-ink"
                  >
                    Stephen Browne
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedin.simon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-ink-muted hover:text-on-ink"
                  >
                    Simon Lewis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-brass-bright">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-on-ink-muted hover:text-on-ink"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </li>
                <li>
                  <Link href="#contact" className="text-on-ink-muted hover:text-on-ink">
                    Book a call
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-line pt-6 text-xs text-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalEntity}
          </p>
          <Link href="/privacy" className="hover:text-on-ink">
            Privacy policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
