export default function LoadingPost() {
  return (
    <div className="mx-auto max-w-3xl animate-pulse rounded-2xl border border-border bg-card p-6 sm:p-10">
      <div className="mb-6 aspect-[16/8] w-full rounded-2xl bg-muted" />
      <div className="h-3 w-28 rounded bg-muted" />
      <div className="mt-3 h-10 w-4/5 rounded bg-muted" />
      <div className="mt-8 space-y-3">
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-3/4 rounded bg-muted" />
      </div>
    </div>
  );
}
