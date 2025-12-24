    // lib/directus.ts
import { createDirectus, rest } from '@directus/sdk';

// 1. Định nghĩa Interface cho Article (Bài viết SEO)
interface SeoArticle {
  title: string;
  slug: string;
  status: 'published' | 'draft' | 'archived';
  content: string;
  // Các field khác nếu cần (content, description...)
}

// 2. Định nghĩa Interface cho Service
interface Service {
  id: number;
  name: string;
  slug: string;
  // Field quan hệ O2M (Key phải trùng với key bạn đặt trong Directus)
  seo_blocks: SeoArticle[]; 
}

// 3. Schema tổng
interface Schema {
  services: Service[];
  seo_articles: SeoArticle[];
}

// 4. Khởi tạo Client
// Dùng biến môi trường để linh hoạt
export const directus = createDirectus<Schema>(
  process.env.NEXT_PUBLIC_API_URL as string
).with(rest());