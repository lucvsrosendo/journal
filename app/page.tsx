import type { Metadata } from "next";
import { PostFeed } from "@/components/post-feed";
import { getAllPosts } from "@/services/posts";

export const metadata: Metadata = {
  title: "Início",
  description: "Lista de posts do blog pessoal."
};

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-6 shadow-glow sm:p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-fg/60">Blog pessoal</p>
        <h1 className="font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight sm:text-5xl">
          Histórias, ideias e experimentos de engenharia.
        </h1>
        <p className="mt-4 max-w-2xl text-fg/75">
          Conteúdo dinâmico vindo do Supabase com foco em performance, simplicidade e experiência de leitura.
        </p>
      </section>

      <PostFeed posts={posts} />
    </div>
  );
}
