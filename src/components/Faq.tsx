"use client";

import { useState } from "react";
import { Container, Eyebrow, SectionHeading } from "./ui";
import { faqs } from "@/content/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line bg-paper-dim">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <SectionHeading>Straight answers.</SectionHeading>
          </div>

          <div className="md:col-span-8">
            <dl className="divide-y divide-line border-y border-line">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.question}>
                    <dt>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      >
                        <span className="font-display text-lg font-medium text-text">
                          {faq.question}
                        </span>
                        <span
                          className={`shrink-0 text-2xl leading-none text-brass-ink transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          aria-hidden
                        >
                          +
                        </span>
                      </button>
                    </dt>
                    {isOpen && (
                      <dd className="-mt-1 pb-5 pr-8 leading-relaxed text-text-muted">
                        {faq.answer}
                      </dd>
                    )}
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
