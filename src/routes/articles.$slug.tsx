import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, getArticle } from "@/data/articles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Zymefeed` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.cover },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: loaderData.article.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl text-foreground">Article not found</h1>
        <p className="mt-3 text-muted-foreground">That story may have moved.</p>
        <Link to="/articles" className="mt-6 inline-block text-primary underline">
          Back to articles
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
      <SiteFooter />
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="mx-auto max-w-2xl px-6 pt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {article.category}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl">
          {article.title}
        </h1>
        <div className="mt-8 flex items-center gap-3 border-y border-border/60 py-4">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 font-serif text-primary">
            {article.author
              .split(" ")
              .map((n: string) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div className="text-sm">
            <p className="text-foreground">{article.author}</p>
            <p className="text-muted-foreground">
              {article.date} · {article.readTime}
            </p>
          </div>
        </div>
        <img
          src={article.cover}
          alt={article.title}
          className="mt-10 aspect-video w-full rounded-lg object-cover"
        />
        <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-foreground/90">
          {article.content.split("\n\n").map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-16 rounded-lg border border-border/60 bg-card p-6">
          <p className="font-serif text-lg text-foreground">Written by {article.author}</p>
          <p className="mt-1 text-sm text-muted-foreground">{article.authorBio}</p>
        </div>
      </article>
      <section className="mx-auto mt-24 max-w-3xl px-6">
        <h2 className="font-serif text-2xl text-foreground">More reading</h2>
        <div className="mt-4">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
