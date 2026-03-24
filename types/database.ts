export type Post = {
  id: string;
  title: string;
  content: string;
  cover_url: string | null;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: Post;
        Insert: {
          id?: string;
          title: string;
          content: string;
          cover_url?: string | null;
          created_at?: string;
        };
        Update: {
          title?: string;
          content?: string;
          cover_url?: string | null;
        };
      };
    };
  };
};
