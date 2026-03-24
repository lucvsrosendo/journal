import Link from "next/link";
import { createPostAction } from "@/app/actions";
import { getAllPosts } from "@/services/posts";
import { createClient } from "@/services/supabase/server";

export default async function DashboardPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const params = await searchParams;
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h1 className="text-2xl font-semibold">Acesso restrito</h1>
        <p className="mt-2 text-sm text-fg/70">Faça login para criar e gerenciar posts.</p>
        <Link className="mt-5 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white" href="/login">
          Ir para login
        </Link>
      </div>
    );
  }

  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-border bg-card p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-fg/70">Conectado como {user.email}</p>

        {params.error ? (
          <p className="mt-4 rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-200">Erro: {params.error}</p>
        ) : null}
        {params.success ? (
          <p className="mt-4 rounded-lg bg-green-100 p-3 text-sm text-green-700 dark:bg-green-950 dark:text-green-200">Post criado com sucesso.</p>
        ) : null}

        <form action={createPostAction} className="mt-6 grid gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="title">
              Título
            </label>
            <input className="w-full rounded-lg border border-border bg-bg px-3 py-2" id="title" name="title" placeholder="Meu novo post" required />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="cover_url">
              URL da capa
            </label>
            <input
              className="w-full rounded-lg border border-border bg-bg px-3 py-2"
              id="cover_url"
              name="cover_url"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="content">
              Conteúdo (markdown)
            </label>
            <textarea
              className="min-h-44 w-full rounded-lg border border-border bg-bg px-3 py-2"
              id="content"
              name="content"
              placeholder="Escreva seu conteúdo..."
              required
            />
          </div>

          <button className="w-fit rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white" type="submit">
            Publicar post
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Posts publicados</h2>
        <p className="mt-1 text-sm text-fg/70">Total: {posts.length}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {posts.map((post) => (
            <li key={post.id}>
              <Link className="text-accent underline" href={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
