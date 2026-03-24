export function PostCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="aspect-[16/8] animate-pulse bg-muted" />
      <div className="space-y-3 p-5">
        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
        <div className="h-6 w-5/6 animate-pulse rounded bg-muted" />
        <div className="h-3 w-full animate-pulse rounded bg-muted" />
        <div className="h-3 w-4/5 animate-pulse rounded bg-muted" />
      </div>
    </article>
  );
}
