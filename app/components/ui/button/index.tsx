// app/components/ui/button.tsx
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline-light" | "outline-dark";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

const variants: Record<Variant, string> = {
  // CTA principal : laiton plein, texte marine — LE bouton "premium"
  primary:
    "bg-brass text-white hover:bg-brass-light",
  // Sur fond sombre (hero avec photo)
  "outline-light":
    "border border-ivory/50 text-ivory hover:bg-ivory hover:text-navy-950",
  // Sur fond clair
  "outline-dark":
    "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-ivory",
};

const base =
  "inline-block px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300";

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: CommonProps & { href?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={`no-underline! ${classes}`}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}