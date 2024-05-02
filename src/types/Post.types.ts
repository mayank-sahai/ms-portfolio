export interface Post {
    [id:string]: {
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    type: string;
    title: string;
    subtitle: string;
    slug: string;
    content: string;
    contentMarkdown: string;
    coverImage: string;
    brief: string;
    ogImage: string;
    metaTitle: string;
    metaDescription: string;
    id: string;
    }
  }