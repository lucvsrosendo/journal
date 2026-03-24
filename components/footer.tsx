export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/80">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-fg/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Byte Journal</p>
        <p>Feito com Next.js, TypeScript e Supabase.</p>
      </div>
    </footer>
  );
}
