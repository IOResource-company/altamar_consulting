import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] ${
        onDark ? "text-brass-bright" : "text-brass-ink"
      }`}
    >
      <span
        className={`h-px w-8 ${onDark ? "bg-brass-bright" : "bg-brass"}`}
        aria-hidden
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem] ${
        onDark ? "text-on-ink" : "text-text"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onDark?: boolean;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  onDark = false,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

  const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-brass text-ink hover:bg-brass-bright",
    secondary: onDark
      ? "border border-ink-line text-on-ink hover:bg-ink-soft"
      : "border border-line text-text hover:bg-paper-dim",
    ghost: onDark
      ? "text-on-ink hover:text-brass-bright"
      : "text-text hover:text-brass-ink",
  };

  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
