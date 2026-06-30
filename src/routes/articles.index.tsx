import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Articles — Zymefeed" },
      {
        name: "description",
        content:
          "Every Zymefeed article on feed enzymes — phytase, NSP enzymes, protease, aquafeed, and the economics of formulation.",
      },

      { property: "og:title", content: "Articles — Zymefeed" },
      {
        property: "og:description",
        content: "Independent reporting on enzyme additives in animal feed.",
      },
    ],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Library</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight text-foreground">Articles</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Long-form writing on feed enzyme technology — written for people who formulate,
          manufacture, and feed.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-10">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
