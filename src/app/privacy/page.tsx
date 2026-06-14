import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="bg-paper">
      <Container className="py-20 sm:py-28">
        <Link
          href="/"
          className="text-sm text-text-muted underline decoration-brass underline-offset-4 hover:text-text"
        >
          ← Back to home
        </Link>
        <h1 className="mt-8 font-display text-4xl font-medium tracking-tight text-text">
          Privacy policy
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-text-muted">
          [CONFIRM — privacy policy content.] This is a placeholder. Replace with
          your final privacy policy before launch, covering what data you
          collect via the contact form and booking tool, how it is stored, and
          the lawful basis under GDPR.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
          Questions about your data? Email{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-text underline decoration-brass underline-offset-4"
          >
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </Container>
    </main>
  );
}
