import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center">
      <h1 className="text-2xl font-semibold">Página não encontrada</h1>
      <p className="mt-2 text-sm text-fg/70">A rota solicitada não existe ou foi removida.</p>
      <Link className="mt-6 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white" href="/">
        Voltar ao início
      </Link>
    </div>
  );
}
