import Link from "next/link";
import { logoutAction } from "@/app/actions";
import { createClient } from "@/services/supabase/server";
import { ThemeToggle } from "@/components/theme-toggle";

export async function Header() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <Link className="text-lg font-bold tracking-tight" href="/">
          Byte Journal
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Link className="text-sm text-fg/80 transition hover:text-fg" href="/">
            Posts
          </Link>
          {user ? (
            <>
              <Link className="text-sm text-fg/80 transition hover:text-fg" href="/dashboard">
                Dashboard
              </Link>
              <form action={logoutAction}>
                <button className="text-sm text-fg/80 transition hover:text-fg" type="submit">
                  Sair
                </button>
              </form>
            </>
          ) : (
            <Link className="text-sm text-fg/80 transition hover:text-fg" href="/login">
              Entrar
            </Link>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
