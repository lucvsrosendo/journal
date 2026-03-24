"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/types/database";
import { PostCard } from "@/components/post-card";

export function PostFeed({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return posts;

    const normalized = query.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalized) ||
        post.content.toLowerCase().includes(normalized)
    );
  }, [posts, query]);

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-3 sm:p-4">
        <label className="mb-2 block text-sm font-medium text-fg/80" htmlFor="search-posts">
          Buscar post
        </label>
        <input
          className="w-full rounded-xl border border-border bg-bg px-4 py-2 text-sm outline-none ring-accent transition placeholder:text-fg/50 focus:ring-2"
          id="search-posts"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Digite título ou conteúdo..."
          type="search"
          value={query}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-fg/70">
          Nenhum post encontrado para essa busca.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
