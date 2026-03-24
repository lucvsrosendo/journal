import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPostById } from "@/services/posts";

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return {
      title: "Post não encontrado"
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 150)
  };
}

export default async function PostPage({ params }: Params) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-10">
      {post.cover_url ? (
        <img alt={`Capa do post ${post.title}`} className="mb-6 aspect-[16/8] w-full rounded-2xl object-cover" src={post.cover_url} />
      ) : null}

      <p className="text-xs uppercase tracking-wider text-fg/60">
        {new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(post.created_at))}
      </p>

      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight">{post.title}</h1>

      <div className="prose-custom mt-8 text-[1.05rem] text-fg/90">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
