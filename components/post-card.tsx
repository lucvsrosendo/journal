import Link from "next/link";
import type { Post } from "@/types/database";

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium"
  }).format(new Date(isoDate));
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-glow">
      <Link className="block" href={`/post/${post.id}`}>
        <div className="aspect-[16/8] w-full overflow-hidden bg-muted">
          {post.cover_url ? (
            <img
              alt={`Capa do post ${post.title}`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              src={post.cover_url}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-fg/60">Sem imagem de capa</div>
          )}
        </div>

        <div className="space-y-3 p-5">
          <p className="text-xs uppercase tracking-widest text-fg/60">{formatDate(post.created_at)}</p>
          <h2 className="line-clamp-2 text-xl font-semibold tracking-tight">{post.title}</h2>
          <p className="line-clamp-3 text-sm text-fg/70">{post.content}</p>
        </div>
      </Link>
    </article>
  );
}
