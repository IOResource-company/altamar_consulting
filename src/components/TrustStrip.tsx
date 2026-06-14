import { Container } from "./ui";
import { trustItems, notFor } from "@/content/site";

export function TrustStrip() {
  const credentials = trustItems.filter((t) => t.kind !== "sector");
  const sectors = trustItems.filter((t) => t.kind === "sector");

  return (
    <section className="border-t border-ink-line bg-ink">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {credentials.map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-3 text-sm font-medium text-on-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brass-bright" aria-hidden />
              {item.label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-10 border-t border-ink-line pt-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brass-bright">
              Sectors
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sectors.map((s) => (
                <li
                  key={s.label}
                  className="rounded-full border border-ink-line px-3 py-1 text-sm text-on-ink-muted"
                >
                  {s.label}
                </li>
              ))}
              {/* Editable logo slots — drop client/partner logos here once cleared. */}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brass-bright">
              Who we&apos;re not for
            </p>
            <ul className="mt-4 space-y-2">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-on-ink-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-on-ink-muted" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
