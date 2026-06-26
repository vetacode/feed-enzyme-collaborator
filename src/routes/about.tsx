import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zymefeed" },
      { name: "description", content: "Zymefeed is an independent publication covering enzyme technology for animal feed — written by nutritionists, formulators, and mill operators." },
      { property: "og:title", content: "About Zymefeed" },
      { property: "og:description", content: "Independent journalism on feed enzymes." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 pt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">About</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground">
          A publication for the people who actually formulate feed.
        </h1>
        <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-foreground/90">
          <p>
            Zymefeed exists because enzyme technology in animal nutrition deserves better
            coverage than supplier brochures and conference abstracts. We write for
            nutritionists, mill managers, and producers who have to make decisions on
            Monday morning.
          </p>
          <p>
            Our contributors include practising animal nutritionists, R&amp;D scientists,
            and feed mill operators across Europe, Latin America, and Asia. Every piece is
            edited for technical accuracy and commercial honesty — if a claim doesn't hold
            up at field scale, it doesn't make the page.
          </p>
          <p>
            We don't sell enzymes, we don't take sponsored content, and we don't quote
            matrix values without a citation. What we do is read the literature, talk to
            the people doing the work, and turn it into something you can use.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border/60 bg-card p-5">
            <p className="font-serif text-lg text-foreground">Independent</p>
            <p className="mt-2 text-sm text-muted-foreground">No supplier sponsorships, ever.</p>
          </div>
          <div className="rounded-lg border border-border/60 bg-card p-5">
            <p className="font-serif text-lg text-foreground">Technical</p>
            <p className="mt-2 text-sm text-muted-foreground">Edited by working nutritionists.</p>
          </div>
          <div className="rounded-lg border border-border/60 bg-card p-5">
            <p className="font-serif text-lg text-foreground">Practical</p>
            <p className="mt-2 text-sm text-muted-foreground">Decisions you can act on this week.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}