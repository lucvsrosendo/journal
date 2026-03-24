"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="rounded-2xl border border-red-300 bg-red-50 p-6 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
      <h2 className="text-xl font-semibold">Falha ao carregar</h2>
      <p className="mt-2 text-sm">{error.message || "Não foi possível carregar os dados agora."}</p>
      <button
        className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white"
        onClick={() => reset()}
        type="button"
      >
        Tentar novamente
      </button>
    </div>
  );
}
