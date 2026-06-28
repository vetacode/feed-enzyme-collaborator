import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/articles";

export function ArticleCard({
  article,
  variant = "row",
}: {
  article: Article;
  variant?: "row" | "feature";
}) {
  if (variant === "feature") {
    return (
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="group grid gap-8 md:grid-cols-2"
      >
        <div className="overflow-hidden rounded-lg bg-muted">
          <img
            src={article.cover}
            alt={article.title}
            className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            {article.category}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            {article.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">{article.excerpt}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="text-foreground">{article.author}</span> · {article.date} {"·"}
            {article.readTime}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className="group flex gap-6 border-b border-border/60 py-8"
    >
      <div className="flex-1">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          {article.category}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-snug text-foreground group-hover:underline">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground md:text-base">
          {article.excerpt}
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          {article.author} · {article.date} · {article.readTime}
        </p>
      </div>
      <div className="hidden h-28 w-40 shrink-0 overflow-hidden rounded-md bg-muted sm:block">
        <img
          src={article.cover}
          alt={article.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
