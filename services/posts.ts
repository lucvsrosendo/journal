import { cache } from "react";
import { createClient } from "@/services/supabase/server";
import type { Post } from "@/types/database";

export const getAllPosts = cache(async (): Promise<Post[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, content, cover_url, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
});

export async function getPostById(id: string): Promise<Post | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, content, cover_url, created_at")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }
    throw new Error(error.message);
  }

  return data;
}

export async function createPost(input: {
  title: string;
  content: string;
  cover_url?: string;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .insert({
      title: input.title,
      content: input.content,
      cover_url: input.cover_url || null
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
