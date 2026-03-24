import Link from "next/link";
import { loginAction, signupAction } from "@/app/actions";

const messageMap: Record<string, string> = {
  missing_fields: "Preencha e-mail e senha.",
  check_email: "Confira seu e-mail para confirmar o cadastro."
};

export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const params = await searchParams;

  const errorMessage = params.error ? messageMap[params.error] || params.error : "";
  const successMessage = params.success ? messageMap[params.success] || params.success : "";

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h1 className="text-2xl font-semibold">Entrar</h1>
      <p className="mt-2 text-sm text-fg/70">Autenticação com Supabase.</p>

      {errorMessage ? (
        <p className="mt-4 rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-200">{errorMessage}</p>
      ) : null}

      {successMessage ? (
        <p className="mt-4 rounded-lg bg-green-100 p-3 text-sm text-green-700 dark:bg-green-950 dark:text-green-200">{successMessage}</p>
      ) : null}

      <form className="mt-6 grid gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            E-mail
          </label>
          <input className="w-full rounded-lg border border-border bg-bg px-3 py-2" id="email" name="email" required type="email" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="password">
            Senha
          </label>
          <input className="w-full rounded-lg border border-border bg-bg px-3 py-2" id="password" name="password" required type="password" />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white" formAction={loginAction} type="submit">
            Entrar
          </button>
          <button className="rounded-lg border border-border px-4 py-2 text-sm font-semibold" formAction={signupAction} type="submit">
            Criar conta
          </button>
        </div>
      </form>

      <p className="mt-8 text-sm text-fg/70">
        Após login, acesse o <Link className="text-accent underline" href="/dashboard">dashboard</Link> para publicar.
      </p>
    </div>
  );
}
