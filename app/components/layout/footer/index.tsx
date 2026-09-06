import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white ">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl mb-3">Cabinet Cohen</h2>
          <p className="text-slate-on-navy text-sm leading-relaxed">
            Avocat au barreau de Paris depuis 1997.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <div className="flex flex-col gap-2 text-sm text-slate-on-navy">
            <a href="mailto:avocat.cohen@gmail.com" className="hover:text-brass transition-colors">
              avocat.cohen@gmail.com
            </a>
            <a href="tel:+33153950973" className="hover:text-brass transition-colors">
              +33 1 53 95 09 73
            </a>
            <p>26 rue Daubigny, 75017 Paris</p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Informations</p>
          <Link
            href="/mentionslegales"
            className="text-sm text-slate-on-navy hover:text-brass transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>

      <div className="border-t border-navy-800 py-6 text-center text-xs text-slate-on-navy">
        © 2025 Cabinet Cohen. Tous droits réservés.
      </div>
    </footer>
  );
}