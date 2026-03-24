"use client";

export default function ErrorPost({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-red-300 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
      <h2 className="text-lg font-semibold text-red-800 dark:text-red-100">Não foi possível carregar o post</h2>
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
