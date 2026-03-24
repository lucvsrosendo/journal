import { PostCardSkeleton } from "@/components/ui/post-card-skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-40 animate-pulse rounded-3xl border border-border bg-card" />
      <div className="grid gap-6 sm:grid-cols-2">
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </div>
  );
}
