import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl tracking-tight text-foreground">Zymefeed</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Independent reporting on enzyme technology for animal nutrition — from the mill floor to
            the gut microbiome.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Read</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/articles" className="hover:text-foreground">
                All articles
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Topics</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Phytase</li>
            <li>NSP Enzymes</li>
            <li>Protease</li>
            <li>Aquafeed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Zymefeed. Independent enzyme journalism.</p>
          <p>Made for nutritionists, formulators, and the curious.</p>
        </div>
      </div>
    </footer>
  );
}
