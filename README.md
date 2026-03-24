# Blog Pessoal Moderno com Next.js + Supabase

Projeto completo de blog com Next.js (App Router), TypeScript, Tailwind CSS e Supabase.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (database + API + auth)

## Funcionalidades implementadas

- Página inicial com listagem dinâmica de posts vindos do Supabase
- Busca de posts por título/conteúdo
- Página dinâmica de post em `/post/[id]`
- Renderização de conteúdo em Markdown
- Layout global com Header e Footer reutilizáveis
- SEO básico com `metadata` por página
- Dashboard simples para criação de posts
- Login/logout com Supabase Auth
- Dark mode
- Loading states (skeleton)
- Error boundary e fallback UI
- Projeto deploy-ready para Vercel

## Estrutura de pastas

```txt
.
├── app
│   ├── actions
│   │   └── index.ts
│   ├── dashboard
│   │   └── page.tsx
│   ├── login
│   │   └── page.tsx
│   ├── post
│   │   └── [id]
│   │       ├── error.tsx
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   └── post-card-skeleton.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── post-card.tsx
│   ├── post-feed.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── services
│   ├── supabase
│   │   ├── client.ts
│   │   └── server.ts
│   ├── posts.ts
│   └── supabase.ts
├── types
│   └── database.ts
├── .env.example
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Configuração do Supabase

1. Crie um projeto no Supabase.
2. Crie a tabela `posts` com o SQL abaixo.
3. Copie URL e ANON KEY para o `.env.local`.

### SQL sugerido para a tabela `posts`

```sql
create extension if not exists "pgcrypto";

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  cover_url text,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

create policy "public read posts"
on public.posts
for select
using (true);

create policy "authenticated create posts"
on public.posts
for insert
to authenticated
with check (true);
```

## Variáveis de ambiente

Crie `.env.local` com:

```env
NEXT_PUBLIC_SUPABASE_URL=SEU_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_SUPABASE_ANON_KEY
```

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Deploy na Vercel

1. Suba o projeto para GitHub.
2. Importe na Vercel.
3. Configure as variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Deploy.

## Melhorias para portfólio (nível júnior/pleno)

1. Slug SEO-friendly (`/post/meu-slug`) com tabela de categorias e tags.
2. Editor rich-text (TipTap/MDX) com upload de imagens para Supabase Storage.
3. Comentários com moderação e likes por post.
4. Paginação + Infinite Scroll + cache com ISR/revalidate.
5. Painel de analytics (views por post, tempo de leitura, origem do tráfego).
6. Testes E2E com Playwright e testes unitários com Vitest.
7. CI/CD (GitHub Actions) com lint, typecheck e testes automáticos.
