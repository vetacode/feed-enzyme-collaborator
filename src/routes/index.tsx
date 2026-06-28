import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zymefeed — Independent reporting on feed enzymes" },
      {
        name: "description",
        content:
          "A Medium-style publication covering enzyme technology for animal nutrition: phytase, NSPs, protease, aquafeed, and the economics behind every gram of activity.",
      },

      { property: "og:title", content: "Zymefeed — Independent reporting on feed enzymes" },

      {
        property: "og:description",
        content:
          "Phytase, NSP enzymes, protease, aquafeed — the science and economics of feed additives.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [feature, ...rest] = articles;
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-10">
        <SplineSceneBasic />
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">This week's read</h2>
          </div>
          <Link
            to="/articles"
            className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10">
          <ArticleCard article={feature} variant="feature" />
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-6">
        <h2 className="font-serif text-2xl text-foreground">Latest</h2>
        <div className="mt-4">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
