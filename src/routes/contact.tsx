import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Newsletter — Zymefeed" },
      { name: "description", content: "Subscribe to the Zymefeed newsletter or send us a story tip. One email every two weeks, no supplier promotions." },
      { property: "og:title", content: "Contact Zymefeed" },
      { property: "og:description", content: "Subscribe or send a story tip." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto grid max-w-5xl gap-16 px-6 pt-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground">
            Story tips, corrections, or just to say hello.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We read every message. If you're working on something interesting — a trial,
            a deployment, a question the literature hasn't answered — we want to hear it.
          </p>
          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            editors@zymefeed.example
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-8">
          <h2 className="font-serif text-2xl text-foreground">Subscribe</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            One newsletter every two weeks. The headline article, a market note, and one
            paper worth reading.
          </p>
          {submitted ? (
            <p className="mt-8 rounded-md bg-primary/10 p-4 text-sm text-primary">
              Thanks — you're on the list.
            </p>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Input required type="text" placeholder="Your name" />
              <Input required type="email" placeholder="you@company.com" />
              <Textarea rows={3} placeholder="Anything you'd like us to cover? (optional)" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}